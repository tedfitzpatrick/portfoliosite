import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import AppRoutes from './AppRoutes';
import SvgIconPerson from './assets/svgiconperson';

import './App.css';

function App() {
  const [contactActive, setContactActive] = useState(false);
  let contactClassNames = 'tf-contact';
  if (contactActive) {
    contactClassNames += ' tf-contactactive';
  }  
  return (
    <div className="App">
      <header className="App-header">
        <h1><span>Ted Fitzpatrick </span><span className='tf-title'>Senior Front-End Designer / Developer</span></h1>
        <button id='tf-contactbuttonopen' onClick={()=>setContactActive(true)}><SvgIconPerson /></button>
        </header>
        <div className={contactClassNames}>
          <div className='tf-contactcontainer'>
            <div className='tf-contactheader'>
              <h2>Contact</h2>
            </div>
            <div className='tf-contactbody'>
              <h3>Email</h3>
              <p><a href='mailto:tedfitzpatrick@me.com'>tedfitzpatrick@me.com</a></p>
              <h3>Mobile / SMS</h3>
              <p><a href='tel:19164102054'>+1 (916) 410-2054</a></p>
              <h3>Mailing</h3>
              <p>831 Main Street<br />Roseville, CA 95678</p>
                          </div>
            </div>
            <button id='tf-contactbuttonclose' onClick={()=>setContactActive(false)}>&times;</button>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/visuals">Visuals</a></li>
            <li><a href="/ui">UI</a></li>
            <li><a href="/code">Code</a></li>
            <li><a href="/about">About</a></li>
            </ul>
        </nav>
        <Router>
    <AppRoutes />
    </Router>
    </div>
  );
}

export default App;