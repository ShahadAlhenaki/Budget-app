import React from 'react';
import './App.css';
import { IncomeWrapper } from './Components/IncomeWrapper';
import { ExpenseWrapper } from './Components/ExpenseWrapper';
import { SavingAmountWrapper } from './Components/SavingAmountWrapper';
import { TargetSavingWrapper } from './Components/TargetSavingWrapper';


function App() {
  return (
<div className="App">
     <h1>Budget App</h1>
     <IncomeWrapper />
     <ExpenseWrapper />
     <SavingAmountWrapper />
     <TargetSavingWrapper />



</div>
  )



    
}

export default App;
