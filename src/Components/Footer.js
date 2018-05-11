import React from 'react';


import Button from 'material-ui/Button';

const style = {
    backgroundColor: "#006064",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    left: "0",
    bottom: "0",
    height: '15%',
    width: "100%",

}
const image ={
  margin: '10px'
}


function Footer({ children }) {
    return (
        <div>
          <div />
            <div style={style}> 
            <a target="_blank" href="https://github.com/jniroo">   <img style={image} src={require('../Assets/github.png')} /></a>

            <a target="_blank" href="https://linkedin.com/in/jamesniro/">  <img style={image} src={require('../Assets/linkedin.png')} /></a>
            <p> James Niroomand All Rights Reserverd 2018</p>
            
          </div>
        </div>
    )
}

export default Footer
