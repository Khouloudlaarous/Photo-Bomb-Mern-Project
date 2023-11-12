import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import Register from './components/Register';
import DetailedImage from './components/DetailedImage'
import './App.css';

function App() {
  return (
    <Routes>
      < Route path='/' element={<DisplayAll/>}/>
      < Route path='/dashboard' element={<Dashboard/>}/>
      < Route path='/signin' element={<SignIn/>}/>
      < Route path='/register' element={<Register/>}/>
      < Route path='/dashboard/photos/:id' element={<DetailedImage/>}/>
    </Routes>
  );
}

export default App;
