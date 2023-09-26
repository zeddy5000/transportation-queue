import React from 'react'
import './customer.css'
import {useDrag} from "react-dnd"


const Customer = ({id,name,pickUp,dropOff}) => {
   
  return (
    <div>
        <div className='customerCard'> 
            <div>{id}</div>
            <div>{name}</div>
            <div>{pickUp}</div>
            <div>{dropOff}</div>
        </div>
      
    </div>
  )
}

export default Customer