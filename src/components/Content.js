import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import logo from '../img/logo.svg';
import LogoWide from '../img/logo-wide.svg';
import Aos from "aos";
import "aos/dist/aos.css";
import bonsai from '../img/monsterranopot.png';
import tree from '../img/tree01.png';



const Container = Styled.div`

width: 100vw;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;


`            

const Plant01 = Styled.img`

position: absolute;
z-index: 50;

left: 70vw;





`

const Plant02 = Styled.img`

position: absolute;
z-index: 50;

right: 70vw;





`

const About = Styled.div`

width: 80vw;
height: 100vh;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`      

const Contact = Styled.div`

width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;


`    
const Logo = Styled.img`

margin-bottom: 50px;


`

const Content = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);

    return(
<>
        
        <Container>


<About id ="about"><Logo data-aos="fade-up" width="80vw;" src={LogoWide}/><p>Royalty-free images for commercial and non-commercial use </p></About>

<Contact id ="contact"><h2>Contact</h2></Contact>
            
<Plant01 width="50%" src={bonsai} alt="" data-aos="slide-left" />



        </Container>

        </>
    );
}



export default Content;