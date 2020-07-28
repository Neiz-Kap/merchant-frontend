import React from 'react';
import './App.css';
import SignupPage from './pages/signup';
import PortfolioPage from './pages/portfolio';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/portfolio'>Портфолио</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/portfolio'>
            <PortfolioPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
