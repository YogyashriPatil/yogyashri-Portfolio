import { useState } from 'react'
import './App.css'

import { motion } from 'framer-motion';
import AnimatedBG from './components/AnimatedBG';
import Header from './components/Header';
import { Info } from './components/Info';
function App() {
  
  return (
    <div>
      <AnimatedBG />
      <Header name='Yogyashri'/>
      <Info />
    </div>
  )
}

export default App
