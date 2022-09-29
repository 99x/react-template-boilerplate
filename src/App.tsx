import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
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
