import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,900&display=swap');
* {

margin: 0;
padding: 0;
outline: none;
box-sizing: border-box; 

}

 ::-webkit-scrollbar{
     width:0px;
     height: .5rem;
   } 
  
//   ::-webkit-scrollbar-thumb{
//      background-color: rgba(255,255,255,1);
  
//   } 


 html, body, #root {

 height: 100%;
 font: 16px Nunito, sans-serif;
 line-height: 24px;
-webkit-font-smoothing: antialiased !important;
 overflow-x: auto;    
    

}

 body {

 background: #ecf1f8;
 }

 ul {

 list-style: none;
 padding: 0;

 }


// `;
