import React from 'react'
import Delivery from './Delivery'

const Deliveries = () => {
  const customerInfo = [{
    customerId : Math.floor(1000 + Math.random()*9000),
    customerName : 'Isu Zeddy',
    pickUpLocation : 'Yaba',
    dropOffLocation : 'Agege',
  },
  {customerId : Math.floor(1000 + Math.random()*9000),
  customerName : 'August Eze',
  pickUpLocation : 'Surulere',
  dropOffLocation : 'Festac',
},

{customerId : Math.floor(1000 + Math.random()*9000),
customerName : 'John Freeman',
pickUpLocation : 'Yaba',
dropOffLocation : 'Akoka',
},
]
  return (
    <> {customerInfo.map((info)=>(<Delivery id={info.customerId} name={info.customerName}
    location={info.dropOffLocation} pickUp={info.pickUpLocation}/>))}</>
  
  )
}

export default Deliveries