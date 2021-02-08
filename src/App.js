import logo from "./logo.svg";
import Styled from "styled-components";
import Header from "./components/Navbar";
import Content from "./components/Content";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Catalogue from "./components/Catalogue";
import NavPanel from "./components/NavPanel";
import './index.css';

import { useState } from "react";





const AppContainer = Styled.div`

display: flex;
flex-direction: column;
align-items: center;
font-family: 'Nunito', sans-serif;
background: #FF9BBF;



`;

const GridCol2 = Styled.div`

display: grid;

grid-template-columns: 1fr 1fr;

width: 80vw;

margin-top: 100px;

@media only screen and (max-width: 800px){
  grid-template-columns: 1fr ;
}

`;



const DarkSwitch = Styled.div`

display: flex;
position: fixed;
top: 0;
background red;
width: 100px;
height: 50px;

@media only screen and (max-width: 800px){

}

`;








function App() {

 
  


  return (

      <AppContainer>
        <Header></Header>
        <Hero></Hero>
        <GridCol2>
          <NavPanel></NavPanel>
          <Catalogue></Catalogue>
        </GridCol2>

        <Content></Content>
      </AppContainer>

  );
}




  
export default App;







