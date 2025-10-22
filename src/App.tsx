import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/authPage/authPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AuthPage/>}/>
    </Routes>
    </>
  );
}

export default App;
