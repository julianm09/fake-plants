import React, { useEffect }  from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";
import bonsai01 from "../img/bonsai01.png";
import ProductCard from "./ProductCard";

import { products } from "../products";

import Aos from "aos";
import "aos/dist/aos.css";

const CatalogueContainer = Styled.div`

width: 100%;

display: flex;
justify-content: flex-end;


color: white;
flex-direction: column;

@media only screen and (max-width: 800px){
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

const ProductCards = Styled.div`

width: 40vw;
height: 250px;
display: flex;
justify-content: flex-end;


`;

const ProductInfo = Styled.div`



width: 100%;
display: flex;





`;
const ProductTitle = Styled.div`


width: 100%;

display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 0 50px ;




`;

const ProductImage = Styled.img`

background: blue;
border-radius: 10px;

`;

const Catalogue = () => {


  useEffect(() => {
    Aos.init({duration: 2000})
}, []);
  /*     const currentProduct = () => {
        for (var i = 0; i < products.length; i++){
            return products[i]
        }

        
    } */





  return (
    <CatalogueContainer >
      {products.map((products) => (
        <ProductCard
        
          name={products.name + '.png'}
          image={products.image}
          id={products.id}
          
        ></ProductCard>
      ))}

      {/* 
            <ProductCard name={currentProduct().name} image={currentProduct().image} id={currentProduct().id} ></ProductCard>
            <ProductCard name={currentProduct().name} image={currentProduct().image} id={currentProduct().id}></ProductCard>
            <ProductCard name={currentProduct().name} image={currentProduct().image} id={currentProduct().id}></ProductCard> */}
    </CatalogueContainer>
  );
};

export default Catalogue;
