import ReactDOM from 'react-dom';
import React from 'react';
import main from "./Main";

window.onload = ()=>
{
   startApp();
}

function startApp()
{
   console.log("started");
   const tag = document.getElementById("react_here");
   ReactDOM.render(React.createElement(main), tag);      
}