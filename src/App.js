import React from 'react'
import Header from './components/header/Header'
import TopContainer from './components/topcontainer/TopContainer'
import Skill from './components/skills/Skill'
import Contact from './components/contact/Contact'
import ProjectContainer from './components/projectContainer/ProjectContainer'
import Experiance from './components/experiance/Experiance'
import Switch from './components/context/Switch'
import { UseTheme } from './components/context/UseTheme'

const App = () => {
  const {theme}=UseTheme()
  return (
    <div className={`${theme}bg`}>
      <Header />
      <Switch />
      <TopContainer />
      <Skill />
      <ProjectContainer />
      <Experiance />
      <Contact />   
    </div>
  )
}

export default App