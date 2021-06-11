import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log("hello")

const makeStars = (count) => {
  const out = [];
  for (let i = 0; i < count; i++) {
    out[i] = 
      {
        size: Math.random() * 1.5,
        color: [1,1,1],
        cord: 
        {
          x: Math.random() * 2600 - 800,
          y: Math.random() * 1900 - 450,
          z: Math.random() * 1000
        }
      };
  }
  return out;
};

ReactDOM.render(
  <React.StrictMode>
    <App stars = {makeStars(15000)} />
  </React.StrictMode>,
  document.getElementById('root')
);

