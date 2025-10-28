import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/authPage';
import { MainPage } from './pages/mainPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AuthPage/>}/>
      <Route path='/main' element={<MainPage/>}/>
    </Routes>
    </>
  );
}

export default App;
