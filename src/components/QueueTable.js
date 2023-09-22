import React from 'react'
import './queueTable.css'
import Deliveries from './Deliveries'

const queueTable = () => {
  return (
    <div className='customerTable'>
        <div className='tableHeader'>
        <div className='deliveryColumns'><h1>Customer Id</h1></div>
        <div className='deliveryColumns'><h1>Customer Name</h1></div>
        <div className='deliveryColumns'><h1>Pick-Up Location</h1></div>
        <div className='deliveryColumns'><h1>Drop-Off Location</h1></div>
        </div>
        <Deliveries/>
        
      </div>
  )
}

export default queueTable