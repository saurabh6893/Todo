import React, { useState, useEffect } from 'react'
import Ico from '../Assets/checklist.svg'

const getLocalData = () => {
  let theTasks = localStorage.getItem('theTasks')

  if (theTasks) {
    return JSON.parse(localStorage.getItem('theTasks'))
  } else {
    return []
  }
}

function Todo() {
  const [title, setTitle] = useState('')
  const [timer, setTimer] = useState('')
  const [tasks, setTasks] = useState(getLocalData())

  const removeItem = (id) => {
    const updatedItems = tasks.filter((elem, ind) => {
      return ind !== id
    })
    setTasks(updatedItems)
  }

  const addTask = () => {
    if (!title) {
    } else {
      const M = new Date().getMinutes().toString()
      const H = new Date().getHours().toString()
      const T = `${H}:${M}`
      setTimer(T)
      const tBody = {
        timer: T,
        title: title,
      }
      setTasks([...tasks, tBody])
      setTitle('')
      setTimer('')
    }
  }

  const removeall = () => {
    setTasks([])
  }

  useEffect(() => {
    localStorage.setItem('theTasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className='main'>
      <div className='appbox'>
        <figure>
          <img src={Ico} alt='svgimg' width='70px' />
          <figcaption>Type to create here &#129299;</figcaption>
        </figure>

        <div className='adder'>
          <input
            type='text'
            placeholder='Enter task'
            value={title}
            name={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <i
            class='fa-solid fa-plus add-btn'
            title='add item'
            onClick={addTask}
          ></i>
        </div>

        <div className='itembox'>
          {tasks.map((elem, id) => {
            return (
              <div className='Item' key={id}>
                <div className='itemtop'>
                  <div className='dateStamp'>{elem.timer}</div>
                  <h3>{elem.title}</h3>
                  <div className='btm'>
                    <i
                      class='fa-solid fa-trash-alt add-btn'
                      title='remove item'
                      onClick={() => removeItem(id)}
                    ></i>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='Checklist'>
          <button className='btxx' onClick={removeall}>
            Checklist
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo
