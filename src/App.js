import React from 'react';
import './App.css';
import SignupPage from './pages/auth/SignupPage';
import SigninPage from './pages/auth/SigninPage';
import PortfolioPage from './pages/portfolio';
import TestPage from './pages/test'
import SettingsPage from './pages/portfolio/components/Profile'

import { Router, Link, Routes } from '@reach/router';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to='portfolio'>Портфолио </Link>
            <Link to='signup'>Регистрация </Link>
            <Link to='signin'>Авторизация </Link>
            <Link to='test'>Тест </Link>
          </li>
        </ul>
      </nav>
      <Router>
        <PortfolioPage path='portfolio/*' />
        <SignupPage path='signup' />
        <SigninPage path='signin' />
        <TestPage path='test' />
      </Router>
    </div>
  );
}

export default App;
