import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion';
import AnimatedBG from './components/AnimatedBG';
import Header from './components/Header';
import { Info } from './components/Info';
import { Card3D } from './components/Card';
import SkillsGlobe from './components/SkillGlobe';
import TechStack from './components/Techstack';
import Certificates from "./components/Certificates";
function App() {
  
  return (
    <div>
      {/* <TechStack /> */}
      <Certificates />
    </div>
  )
}

export default App
