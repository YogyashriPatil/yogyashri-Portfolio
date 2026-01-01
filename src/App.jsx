import { useState } from 'react'
import './App.css'

import { motion } from 'framer-motion';
import AnimatedBG from './components/AnimatedBG';
import Header from './components/Header';
import { Info } from './components/Info';
import { Card3D } from './components/Card';
function App() {
  
  return (
    <div>
      {/* <AnimatedBG /> */}
      <div>
        <Header name='Yogyashri'/>
        <Info />
      </div>

      <div>
          {/* <Card3D children={<div>
            hi there
          </div>} /> */}
      </div>
    </div>
  )
}

export default App
