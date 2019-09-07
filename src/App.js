import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const particlesOptions = {
  polygon: {
      enable: true,
      type: 'inside',
      move: {
          radius: 10
      },
      url: 'path/to/svg.svg'
  }
};

function App() {
  return (
    <div className="App">
      <Particles 
                params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
