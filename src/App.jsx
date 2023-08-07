import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import Design from './components/Design'
import Home from './components/Home';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import Summariser from './components/Summariser';
import Keyword from './components/Keyword';
import Speech from './components/Speech';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#170000';
  }, []);
  // toggleMode is a function which will toggle the mode from light to dark and vice versa.this function is called from the navbar component.
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#170000';
      

    } else {
      setMode('light');
      document.body.style.backgroundColor = '#B1BDC5';
     
    }
  };

  //show alert is a function which will take message and type as a parameter and set the alert state to the object containing the message and type.through out the app where ever we want to show the alert we will call this function and pass the message and type as a parameter.
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <BrowserRouter>
    
      <div className="app-container" style={{position:"relative"}}>
      <div className="design" style={{position:"absolute"}}>
      <Design />
    </div>
        <div className="header">
          <Navbar title="TextAnalyser" mode={mode} togglemode={toggleMode} />
          <br /><br /><br />
          <Alerts alert={alert} />
        </div>
        <br />
        <div className="maincontain">
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/abouts" element={<About mode={mode} />} />
            <Route path="/textform" element={<TextForm heading="Enter the text to" mode={mode} />} />
            <Route path="/text" element={<Summariser showAlert={showAlert} mode={mode} />} />
            <Route path="/keyword" element={<Keyword showAlert={showAlert} mode={mode} />} />
            <Route path="/speech" element={<Speech mode={mode} />} />
          </Routes>
        </div>
        <footer style={{ backgroundColor: `${mode === "light" ? "#f1f1f1" : "#2b3035"}` }}>
          <Footer mode={mode} />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
