import React from 'react';
import './App.css';
import SignupPage from './pages/auth/SignupPage';
import SigninPage from './pages/auth/SigninPage';
import RecoverPage from './pages/auth/RecoverPage';
import StepSignUp from './pages/auth/StepSignup';
import PortfolioPage from './pages/portfolio';
import TestPage from './pages/test';

import history from './history';

import { Router, Link, Routes } from '@reach/router';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to='portfolio'>Портфолио </Link>
            <Link to='signup'>- Регистрация </Link>
            <Link to='signin'>- Авторизация </Link>
            <Link to='test'>- Тест </Link>
            <Link to='recover'>- Восстановление пароля </Link>
            <Link to='stepsignup'>- Регистрация2 </Link>
          </li>
        </ul>
      </nav>
      <Router history={history}>
        <PrivateRoute component={PortfolioPage} path='portfolio/*' />
        <SignupPage path='signup' />
        <SigninPage path='signin' />
        <TestPage path='test' />
        <RecoverPage path='recover'/>
        <StepSignUp path='stepsignup'/>
      </Router>
    </div>
  );
}

export default App;
