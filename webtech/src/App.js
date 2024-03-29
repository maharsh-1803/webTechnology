import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { Profile } from './Components/Profile/Profile';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
