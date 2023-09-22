
import { useState, useEffect } from 'react';
import './App.css';
import QueueTable from './components/QueueTable';
function App() {
  const customers = [{
    customerId : Math.random(10),
    customerName : 'Isu Zeddy',
    pickUpLocation : 'Yaba',
    dropOffLocation : 'Agege',
  },
  {customerId : Math.random(10),
  customerName : 'Augustine Eze',
  pickUpLocation : 'Surulere',
  dropOffLocation : 'Festac',
}
]

  const [deliveryInfo, setDeliveryInfo] = useState([customers]);
 


  return (
    <div className="App">
        <QueueTable />
    </div>
  );
}

export default App;
