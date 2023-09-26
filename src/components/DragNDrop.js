import React, { useState } from 'react'
import Customer from './Customer';
import './dragNDrop.css'
import {useDrop} from "react-dnd"

const customerInfo = [
    {
        customerId : 1,
        customerName : 'Isu Zeddy',
        pickUp : 'Akoka',
        dropOff : 'Surulere',
    },
    {
        customerId : 2,
        customerName : 'Isu Zeddy',
        pickUp : 'Akoka',
        dropOff : 'Surulere',
    },
    {
        customerId : 3,
        customerName : 'Isu Zeddy',
        pickUp : 'Akoka',
        dropOff : 'Surulere',
    },
    {
        customerId : 4,
        customerName : 'Isu Zeddy',
        pickUp : 'Akoka',
        dropOff : 'Surulere',
    },
];

const DragNDrop = () => {
    const [plannerBoard,setPlannerBoard] = useState([
      
   ])
  
   const [isOver,drop] = useDrop(()=>({
        accept : "str",
        drop : (item)=> addCustomerToPlanner(item.id),
        collect : (monitor)=>({
        isOver : !!monitor.isOver(),
        })
   }))
   const addCustomerToPlanner = (id)=>{
         const plannerContent = customerInfo.filter((item)=>(id===item.id))
         setPlannerBoard([...plannerBoard,plannerContent[0]])
        console.log(plannerBoard)
   }
   

  return (
    <div className='appLayout'>
        
       <div className='customerTable'>{customerInfo.map((customer)=>(<Customer id={customer.customerId}
        name={customer.customerName} pickUp={customer.pickUp} dropOff={customer.dropOff} type="div"/>))}</div>
       < div className='deliveryBoard' ref={drop}></div>
    </div>
  )
}

export default DragNDrop