import React, { useState } from 'react'
import Ico from '../Assets/checklist.svg'

function Todo() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([])

  const removeItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id
    })

    setItems(updatedItems)
  }
  const addItem = () => {
    if (!title) {
    } else {
      setItems([...items, title])
      setTitle('')
    }
  }

  const removeall = () => {
    setItems([])
  }
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
            onChange={(e) => setTitle(e.target.value)}
          />
          <i
            class='fa-solid fa-plus add-btn'
            title='add item'
            onClick={addItem}
          ></i>
        </div>

        <div className='itembox'>
          {items.map((elem, ind) => {
            return (
              <div className='Item' key={ind}>
                <div className='itemtop'>
                  <div className='dateStamp'>date</div>
                  <h3>{elem}</h3>
                  <div className='btm'>
                    <i
                      class='fa-solid fa-trash-alt add-btn'
                      title='remove item'
                      onClick={() => removeItem(ind)}
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
