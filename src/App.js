
import { useState, useEffect } from 'react';
import './App.css';
import QueueTable from './components/QueueTable';
import DeliveryPlaner from './components/DeliveryPlaner';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend"

function App() {


 
 


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <QueueTable />
        <DeliveryPlaner/>
      </div>
    </DndProvider>
   
  );
}

export default App;
