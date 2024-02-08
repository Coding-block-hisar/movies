import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {

    const mystyle={
        display:"flex",
        
        
    };

    return (
        
        <>
      <div style={mystyle}>
        <h1>Movies</h1>
        <h2 style={{marginLeft:10,marginTop:28}}>Favorites </h2>
        </div>
        </>
    )
  }
}
