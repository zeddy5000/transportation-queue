import React from 'react'
import './deliveryPlanner.css'

const DeliveryPlaner = () => {
  return (
    <div className='plannerBody'>
      <div className='planerHeader'>
        <div className='headerItem'><h1>Date</h1></div>
        <div className='headerItemSlot'><h1>Slots</h1></div>
      </div>
      <div className='planerTable'>
        <div className='plannerRow'>
          <div className='dateColumn'></div>
          <div className='slotColumn'><h3>1</h3></div>
        </div>
        <div className='plannerRow'>
          <div className='dateColumn'></div>
          <div className='slotColumn'><h3>2</h3></div>
        </div>
        <div className='plannerRow'>
          <div className='dateColumn'></div>
          <div className='slotColumn'><h3>3</h3></div>
        </div>
        <div className='plannerRow'>
          <div className='dateColumn'></div>
          <div className='slotColumn'><h3>4</h3></div>
        </div>
        
      </div>

    </div>
  )
}

export default DeliveryPlaner