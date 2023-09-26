
import { useState, useEffect } from 'react';
import './App.css';
import {DragDropContext,drop} from "react-beautiful-dnd"
import Customer from './components/Customer';

function App() {
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

  return (
    
      <div className="App">
          <div className='customerTable'>
             <div className='tableHeader'></div>
             <div className='customerCards'>
                {customerInfo.map((card)=>(<Customer id={card.customerId} name={card.customerName}
                pickUp={card.pickUp} dropOff={card.dropOff}/>))}
             </div>
          </div>
      </div>
    
   
  );
}

export default App;
