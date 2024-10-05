import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import TaskButton from './components/TaskButton/TaskButton'
import Dropdown from './components/Dropdown/Dropdown'
import Modal from './components/Modal/Modal'

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <span className='second-container'>
      <TaskButton />
      <Dropdown />
      </span>
      <Modal />
    </div>
  )
}

export default App
