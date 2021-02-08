import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import bonsai01 from '../img/bonsai01.png';
import Button from'./Button';
import { useRef } from 'react';
import { products } from '../products';
import Aos from "aos";
import "aos/dist/aos.css";



const ProductCardContainer = Styled.div`


height: 100vh;
display: flex;

align-items: center;



`


const ProductCards = Styled.div`

width: 40vw;
height: 250px;
display: flex;
justify-content: center;
margin-bottom: 100px;


@media only screen and (max-width: 800px){
    width: 100%;
    flex-direction: column;
  }
  

`

const ProductInfo = Styled.div`



width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

padding: 0 0 0 50px;

@media only screen and (max-width: 800px){
    padding: 0 0 0 0px;

  }
  



`
const ProductTitle = Styled.div`


width: 100%;

display: flex;
justify-content: space-between;
align-items: flex-start;
margin: 0 0 50px 0;





`


const ImageContainer = Styled.div`

border-radius: 10px;
width: 500px;

display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 800px){
    width: 80vw;
 
  }




`
const ProductImage = Styled.img`

border-radius: 0px;
width: 100%;

@media only screen and (max-width: 800px){
    width: 50vw;
  margin-bottom: 100px;
 
  }



`

const ButtonContainer = Styled.div`


display: flex;
justify-content: center;
width: 100%;

margin:50px 0 0 0;



`

const Download = Styled.a`

background: #BCCBFF;
border-radius: 450px;
width: 100%;
height: 50px;
border: 0;
color: white;
font-family: 'Nunito', sans-serif;
font-size: 16px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;


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
  



`

const ProductCard = ( props ) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);



    window.onscroll = function() {
/*         console.log(window.pageYOffset)
        console.log(document.getElementById('1'))

        console.log(props) */
    }



    return(

        <ProductCardContainer id={props.id} data-aos="fade-in">
        <ProductCards >

            <ImageContainer>
            <ProductImage  src={props.image.default}/>
            </ImageContainer>

        <ProductInfo>
            <ProductTitle>
            <h3>{props.name}</h3>
            <h3>$0</h3>
            </ProductTitle>
            <p>Includes: 5000 x 5000 png render of plant with pot.</p>
            
            <ButtonContainer>
                <Download href={props.image.default} download={props.image.default}>download</Download>
            </ButtonContainer>
            
            
        </ProductInfo>
        </ProductCards>

        </ProductCardContainer>
    );
}

export default ProductCard;