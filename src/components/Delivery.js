import React from 'react'
import './delivery.css'
import {useDrag} from "react-dnd"

const Delivery = ({id,name,location,pickUp}) => {
    const [isDragging,drag] = useDrag(()=>({
      type: "div",
      collect:(monitor)=>({
        isDragging : !!monitor.isDragging()
      })
    }))
  return (
    <div className='deliveryCard' style={{border : isDragging ? "1px" :"0px"}} ref={drag}>
      <div className='deliveryCardItem'>{id}</div>
      <div className='deliveryCardItem'>{name}</div>
      <div className='deliveryCardItem'>{location}</div>
      <div className='deliveryCardItem'>{pickUp}</div>  
    </div>
    
  )
}

export default Delivery