import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './component/navbar/Login/LoginPage'
import Home from './component/navbar/home/Home';
import { useState } from 'react';

function App() {
  const [array,setArray]=useState([]);
  function Transaction(a) {
    setArray([...array,a]);
    console.log(a);
  }
  console.log(array);
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home array={array} Transaction={Transaction} />} />
      </Routes>
    </Router>

  
    </>
  )
}

export default App
