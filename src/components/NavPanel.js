import React from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";
import logo from "../img/logo.svg";
import bonsai01 from "../img/bonsai01.png";
import tree from '../img/tree90.png'
import { products } from "../products";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Container = Styled.div`



z-index: 100;
display: flex;
height: 100vh;
position: sticky;
top: 0;
display: flex;

align-items: space-between;

flex-direction: column;


@media only screen and (max-width: 800px){
    display: none;
  }

`;

const Grid = Styled.div`



height: 33vw;
display: grid;
width: 80%;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr ;
grid-gap: 50px;




@media only screen and (max-width: 800px){
    height: 65vw;
  }
  



`;

const GridPanel = Styled.a`
background: white;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;


overflow: hidden;
position: relative;
z-index: 20;

&:after {
  background: #fff;
  content: "";
  height: 255px;
  left: -125px;
  opacity: .2;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 250ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}

&:hover{

  &:after {
    left: 190%;
    transition: all 250ms cubic-bezier(0.19, 1, 0.22, 1);
  }



`;

const Sort = Styled.a`

width: 40%;
height: 100px;
display: flex;
margin-top: 50px;
justify-content: flex-end;
align-items: flex-start;
border-radius: 10px;
color: white;

z-index: 00;
`;

const SortMenu = Styled.a`

min-width: 100px;
height: 30px;
display: flex;

justify-content: center;
align-items: center;
border-radius: 10px;
color: white;
margin: 0 4vw;
color: white;
border: 1px solid white;
cursor:pointer;

border-radius: 50px;
border: 1px solid;


overflow: hidden;
position: relative;

z-index: 1000;

&:after {
  background: #fff;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .2;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}

&:hover{

  &:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }



}



`;

const NextPage = Styled.a`

width: 100%;

display: flex;

justify-content: space-between;
align-items: center;
border-radius: 10px;
color: white;



`;

const Plant02 = Styled.img`
width: 100%;
position: absolute;
z-index: 50;
left: -30vw;
bottom: -30vw;
z-index: -100;



`

const NavPanel = () => {
  let currentColor = "#ffffff";

  const altColor = () => {
    if (currentColor == "#ffffff") {
      currentColor = "#97D6C7";
    } else if (currentColor == "#97D6C7") {
      currentColor = "#ffffff";
    } else {
    }

    return currentColor;
  };

  useEffect(() => {
    Aos.init({duration: 2000})
}, []);





  return (
    <Container >

      <Plant02 data-aos="slide-right" src={tree}></Plant02>
      <Sort>

      </Sort>
      <Grid>
        {products.map((products) => (
          <GridPanel
            style={{ background: 'none' }}
            href={"#" + products.id}
          >
            <img style={{ width: "50%" }} src={products.image.default}></img>
          </GridPanel>
        ))}
      </Grid>

      <NextPage>

      <Sort><p>page</p> 

<SortMenu>
<option>1</option>


    </SortMenu>
</Sort>
          <Sort><p>sort by</p>

<SortMenu>
<option>newest</option>



    </SortMenu>
</Sort>
      </NextPage>


    </Container>
  );
};

export default NavPanel;
