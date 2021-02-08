import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components'
import './components.css'



const LoadScreen = () => {


    
  const loadScreen = document.querySelector('.load-screen')


  

  setTimeout(function(){
  
    loadScreen.style.display = 'none';
  
  }, 3000);
    return(
        <div className='load-screen'>hey</div>
    );
}

export default LoadScreen;