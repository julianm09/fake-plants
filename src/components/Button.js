import React from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";
import bonsai01 from "../img/bonsai01.png";

const ButtonContainer = Styled.div`


display: flex;
justify-content: center;
width: 100%;





`;

const Download = Styled.button`

background: #BCCBFF;
border-radius: 450px;
width: 50%;
min-width: 100px;
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
    width: 100%;
  }
  



`;

const Button = (words) => {
  return (
    <ButtonContainer>
      <Download>{words.words}</Download>
    </ButtonContainer>
  );
};

export default Button;
