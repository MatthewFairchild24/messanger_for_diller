import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/authPage';
import { MainPage } from './pages/mainPage';
import { RegPage } from './pages/regPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AuthPage/>}/>
      <Route path='/main' element={<MainPage/>}/>
      <Route path='/reg' element={<RegPage/>}/>
    </Routes>
    </>
  );
}

export default App;
