import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components'
import logo from '../img/logo-wide.svg';
import fake from '../img/fake.svg';
import bonsai90 from '../img/bonsai90.png';
import rightPlant from '../img/right-plant.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const PageContainer = Styled.div`

width: 80vw;
height: 60vh;

display: flex;
align-items: flex-end;

@media only screen and (max-width: 800px){
    display: none;

  }


`

const Intro = Styled.div`

width: 80vw;
height: 200px;

display: flex;
align-items: flex-end;
color: white;
margin-bottom: 100px;


@media only screen and (max-width: 800px){
    height: 90vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

const IntroText = Styled.div`

display: flex;
justify-content: center;
align-items: flex-end;
width: 100%;
height: 100%;

margin: 0;
padding: 0;

z-index: 200;

`


const Plant01 = Styled.img`

position: absolute;
z-index: 50;
left: -20vw;
top: 150px;

animation: floating-animation 4s ease infinite;



`

const Plant02 = Styled.img`

position: absolute;
z-index: 50;
right: -20vw;
bottom: -10vw;


animation: floating-animation 3s ease infinite;

animation-delay: 0s;

`

const HeroImage = Styled.img`
z-index: 100;


  `

  const ButtonContainer = Styled.div`
  z-index: 200;

display: flex;
justify-content: center;
align-items: flex-end;
width: 100%;
height: 100%;



@media only screen and (max-width: 800px){
    justify-content: left;
  }


`

const Button = Styled.button`


background: #BCCBFF;
border-radius: 450px;
width: 100%;
height: 50px;
border: 0;
color: white;
font-family: 'Nunito', sans-serif;
font-size: 16px;
cursor: pointer;


&:focus{
    outline: none;
}

&:hover{
    transition: 0.5s;
    border-radius: 50px;
    background: #BCCBFF;
    box-shadow:  25px 25px 50px #5a617a, 
                 -25px -25px 50px #ffffff;
}

&:active{


    border-radius: 50px;
    background: linear-gradient(145deg, #a9b7e6, #c9d9ff);
    box-shadow:  25px 25px 50px #5a617a, 
                 -25px -25px 50px #ffffff;
}


@media only screen and (max-width: 800px){
    width: 80vw ;
  }
  



`








const Hero = (words) => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, []);

    return(
        <>
        <Plant01 width="50%" src={bonsai90} alt="" />
        <Plant02 width="50%" src={rightPlant} alt="" />
        <PageContainer>
            <HeroImage width="100%" src={logo} alt="" />
        
            
        </PageContainer>
        
        <Intro >

            <IntroText >

            <h1>not artificial... <img width="75px" src={fake} alt=""/>
        <br />
   
        for your landing pages, advertisments and designs. 
        </h1>


            </IntroText>

        <ButtonContainer>
       <a style={{ width:'50%' }} href="#1"><Button>See Collection</Button></a> 
        </ButtonContainer>


            </Intro>

     
        </>
    );
}

export default Hero;