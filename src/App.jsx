import { useState } from 'react'
import './App.css'

import { motion } from 'framer-motion';
import AnimatedBG from './components/AnimatedBG';
import Header from './components/Header';
function App() {
  
  return (
    <div>
      <AnimatedBG />
      <Header name='Yogyashri'/>
    </div>
  )
}

export default App
