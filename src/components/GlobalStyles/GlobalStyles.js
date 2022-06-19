import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body{
    
/* width */
::-webkit-scrollbar {
  width: 0.4rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px white; 
  border-radius: 1px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #F44336; 
}
 }


`


export default GlobalStyle