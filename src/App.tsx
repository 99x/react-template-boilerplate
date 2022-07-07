import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/navigations/nav-bar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
            {/* <Route path="/" exact component={Index} />
            <Route path="/products/:id" component={Product} />  */}
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
