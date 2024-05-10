import { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import './App.css'
import Home from './Pages/Home.jsx';
import Success from './Pages/Success.jsx';
import NotFound from './Pages/NotFound';


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<Success/>}/>
       <Route path="*" element={<NotFound/>} /> 
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
