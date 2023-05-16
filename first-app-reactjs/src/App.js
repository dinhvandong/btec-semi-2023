import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />      
        <Route path='/home' element={<HomePage />} />      
        <Route path='/register' element={<RegisterPage />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
