import React from 'react';
import './App.css';
import { IncomeWrapper } from './Components/IncomeWrapper';
import { ExpenseWrapper } from './Components/ExpenseWrapper';


function App() {
  return (
<div className="App">
     <h1>Budget App</h1>
     <IncomeWrapper />
     <ExpenseWrapper />



</div>
  )



    
}

export default App;
