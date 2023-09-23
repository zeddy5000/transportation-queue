import React from 'react'
import './delivery.css'

const Delivery = ({id,name,location,pickUp}) => {
  return (
    <div className='deliveryCard'>
      <div className='deliveryCardItem'>{id}</div>
      <div className='deliveryCardItem'>{name}</div>
      <div className='deliveryCardItem'>{location}</div>
      <div className='deliveryCardItem'>{pickUp}</div>
      
    </div>
    
  )
}

export default Delivery