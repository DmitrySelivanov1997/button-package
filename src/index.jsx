const packageJson = require("../package.json");
import 'styles.css';
import React from 'react';

const Button = (props) => {
   return (
    <button className="button" onClick={()=> console.log(`Button of version: ${packageJson.version} clicked`)}>I'm blue button of version: {packageJson.version}. {props}</button>
   )
}
export default Button;
