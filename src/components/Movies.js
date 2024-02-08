import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import './my.css';

export default function Movies() {
    const [movies,setmovies]=useState([])
    const [name,setname]=useState('')
   
    const [result,setresult]=useState()
    
    const getdata=(m)=>{
        console.log(m);
         fetch(` http://www.omdbapi.com/?s=${m}&apikey=a3969654`)
            .then(response => response.json())
            .then(json =>{
                setresult(json.Response);
                setmovies(json.Search)
            })
       
        
            
        };
      useEffect(()=>{
        getdata('Guardians of the Galaxy');
        //console.log(movies);
      },[]);
  return (
    <div>
        <div className='search'>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/> 
        <button onClick={()=>getdata(name)}>search</button>
        
        </div>

        <div className='container'>
            <div className='row row-cols-4'>
                
                    {
                      result==='True'&&
                        movies.map((movie)=>{
                            return (
                                <div className="card col" style={{width:"18 rem"}}>
                                <img src={movie.Poster} className="card-img-top img-fluid" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">{movie.Title}</h5>
                                  <p className="card-text">Year - {movie.Year}</p>
                                  <p className="card-text">Type - {movie.Type}</p>
                                  <a href="#" className="btn btn-primary">watch</a>
                                </div>
                              </div>
                            )
                        })
                    
                    

                    }
               
                

            </div>
        </div>
    </div>
  )
}
