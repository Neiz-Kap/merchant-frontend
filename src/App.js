import React from 'react';
import './App.css';
import SignupPage from './pages/auth/SignupPage';
import SigninPage from './pages/auth/SigninPage';
import RecoverPage from './pages/auth/RecoverPage';
import RecoverConfirm from './pages/auth/RecoverConfirm';
import StepSignUp from './pages/auth/StepSignup';
import PortfolioPage from './pages/portfolio';
import TestPage from './pages/test';

import history from './history';

import { Router, Link } from '@reach/router';
import PrivateRoute from './components/PrivateRoute';
import Logout from './pages/Logout';

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
            <Link to='recover-confirm'>- Смена пароля </Link>
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
        <RecoverConfirm path='recover-confirm/:token'/>
        <StepSignUp path='stepsignup'/>
        <Logout path='logout'/>
      </Router>
    </div>
  );
}

export default App;
