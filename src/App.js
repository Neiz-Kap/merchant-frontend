import React from 'react';
import './App.css';
import SignupPage from './pages/signup';
import PortfolioPage from './pages/portfolio';
import TestPage from './pages/test'
import SettingsPage from './pages/portfolio/components/Profile'

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
              <Link to='/portfolio'>Портфолио </Link>
              <Link to='/signup'>Регистрация </Link>
              <Link to='/test'>Тест </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/portfolio'>
            <PortfolioPage/>
          </Route>
          <Route path='/signup'>
            <SignupPage/>
          </Route>
          <Route path='/test'>
            <TestPage/>
          </Route>
          <Route path='/settings'>
            <SettingsPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
