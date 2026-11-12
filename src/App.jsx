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
import GitHubProjects from './components/GitHubProjects';
function App() {
  
  return (
    <div>
      <TechStack />
      <Certificates />
      <GitHubProjects />
      <SkillsGlobe />
    </div>
  )
}

export default App
