import React, {Component} from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import '../styles/App.css';
import Home from './Home'


class App extends Component {

  componentDidMount(){
    setTimeout(function(){
      document.getElementById('overlay').remove()
    },1000)
  }

  render(){
    return (
      <div className="App">
        <Overlay id='overlay'/>
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 225,
                enable: true,
                opacity: 0.3,
                width: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 2000, //Bigger area = more sparse
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 6,
              },
            },
            detectRetina: true,
          }}
        />
        <Switch>
          <AppContainer>
            <Route
              exact
              path="/"
              render={props => <Home {...props} />}
            />
          </AppContainer>
        </Switch>
      </div>
    )
  }
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100%;
`

const Overlay = styled.div`
  height: 100%;
  width: 100vw;
  position: absolute;
  z-index: 1;
  background-color: rgba(0,0,0,1);
  animation: brighten 1s ease-in;
  animation-fill-mode: forwards;

  @keyframes brighten {
    0% {background-color: rgba(0,0,0,1);}
    100% {background-color: rgba(0,0,0,0);}
  }
`
