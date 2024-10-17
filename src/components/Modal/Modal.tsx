import React, { useState } from 'react'
import TaskButton from '../TaskButton/TaskButton'
const Modal = () => {
    const [display , setDisplay] = useState(false)
    const HandleIcon = () => {
        setDisplay(false)
    }
    const openModal = () =>{
      console.log("ji")
      setDisplay(true)
    }
  return (
    <div className= {display ? 'modal-main': 'hide-display'}>
        <p className='close-icon' onClick={HandleIcon}>X</p>
      <div className='modal-container'>
        <h1>Add TODO</h1>
        <form className='form'>
            <label htmlFor="">Title</label>
            <input type="text" />
            <label htmlFor="">Status</label>
            <select name="" id="">
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
            </select>
            <span>

            <TaskButton onclick = {openModal}/>
            <button className='add-task-button'>Cancel</button>
            </span>
        </form>
      </div>
    </div>
  )
}

export default Modal
