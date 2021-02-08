import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components'

const PageContainer = Styled.div`

width: 100vw;
border-radius:50px;
background: linear-gradient(145deg, #ffc7e2, #e6a7be);
box-shadow:  25px 25px 50px #7a5965, 
             -25px -25px 50px #ffffff;



`

const Container = () => {
    return(
        <PageContainer>
          
        </PageContainer>
    );
}

export default Container;