import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components'
import './components.css'


export const LoadScreen = () => {

const [loading, setLoading] = useState(true);

useEffect(() => {
setTimeout(()=> {
setLoading(false)
},3000)
}, []);

    return(
        <div style={{
          width: '100vw',
          height: '100vh',
          background: '#FF9BBF',
          position: 'absolute',
          zIndex: '100000',
          top: '0',
          left: '0',
          display: loading ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img style={{height: '50px', animation: '2s jump 0.2s ease infinite'}} src="/f.svg"></img>
          <img style={{height: '50px', animation: '2s jump 0.4s ease infinite'}} src="/a.svg"></img>
          <img style={{height: '50px', animation: '2s jump 0.6s ease infinite'}} src="/k.svg"></img>
          <img style={{height: '50px', animation: '2s jump 0.8s ease infinite'}} src="/e.svg"></img>
          <img style={{height: '50px', animation: '2s jump 1s ease infinite'}} src="/p.svg"></img>
          <img style={{height: '50px', animation: '2s jump 1.2s ease infinite'}} src="/l.svg"></img>
          <img style={{height: '50px', animation: '2s jump 1.4s ease infinite'}} src="/a-2.svg"></img>
          <img style={{height: '50px', animation: '2s jump 1.6s ease infinite'}} src="/n.svg"></img>
          <img style={{height: '50px', animation: '2s jump 1.8s ease infinite'}} src="/t.svg"></img>
          <img style={{height: '50px', animation: '2s jump 2.0s ease infinite'}} src="/s.svg"></img>
        </div>
    );
}

