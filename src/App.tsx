import React, { useState } from 'react';
import './App.css';

import  MaterialUIPickers, { selectedDateFrom, selectedDateTo } from "./components/Pickers";

import { anotherGet } from "./components/RequestMaker";


import { Button, Grid } from '@material-ui/core';
import { AnswerOrder } from './interfaces/InitialAnswers';


function App() {
  const [orders, setOrders] = useState<AnswerOrder[]>([]);
  async function loadData() {
    const a = await anotherGet<AnswerOrder[]>('http://localhost:8090/testOrderedOrders');
    
    setOrders(a);
  };
  console.log(orders);

  return (
    <div className="App">
      <div>


        
      {/*   <MaterialUIPickers/> */}

        

         <Button variant="outlined" onClick={loadData}>
              Read data
          </Button> 

    
          {orders.map((o:AnswerOrder) => {
            return <p key={o.arrived} >
              {o.orderNumber} {o.healthCareDistrict} {o.arrived}  used on: {o.usedOnDays[0]}  {o.usedOnDays[1]}  {o.usedOnDays[2]}  {o.usedOnDays[3]}
            </p>
          })}
  
      </div>

 
    </div>
  );
}

export default App;
