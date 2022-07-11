import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SvgIconPerson from './assets/svgiconperson';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><span>Ted Fitzpatrick </span><span className='tf-title'>Senior Front-End Designer / Developer</span></h1>
        <button id='tf-contactbuttonopen'><SvgIconPerson /></button>
        </header>
        <div className='tf-contact'>
        {/* tf-contactactive */}
          <div className='tf-contactcontainer tf-contactactive'>
            <div className='tf-contactheader'>
              <h2>Contact</h2>
            </div>
            <div className='tf-contactbody'>
              <h3>Email</h3>
              <p><a href=''>tedfitzpatrick@me.com</a></p>
              <h3>Mobile / SMS</h3>
              <p><a href='tel:19164102054'>+1 (916) 410-2054</a></p>
              <h3>Mailing</h3>
              <p>831 Main Street<br />Roseville, CA 95678</p>
              

            </div>
            </div>
            <button id='tf-contactbuttonclose'>&times;</button>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Visuals</a></li>
            <li><a href="#">UI</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">About</a></li>
            </ul>
        </nav>
        <main>
        <div className="tf-mainbkgd"></div>




        </main>
    </div>
  );
}

export default App;
