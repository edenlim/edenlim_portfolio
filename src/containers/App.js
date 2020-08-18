import React from 'react';
import '../styles/App.css';
import Particles from 'react-particles-js';
import bp from '../img/bg.jpg'


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bp})`}} >
      <h1>test</h1>
      <Particles
        params={{
          particles: {
            // color: {
            //   value: "#000000"
            // },
            // line_linked: {
            //   color: {
            //     value: "#000000"
            //   }
            // },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      />

      <h1>hi</h1>
    </div>
  );
}

export default App;
