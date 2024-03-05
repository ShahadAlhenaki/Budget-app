import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

     <form>
      <p>Income Sources</p>
    <input type='text' placeholder='Salary' />
    <p>Amount of income</p>
    <input type='text' placeholder='' />
<p>Date of income</p>
   <input type='date' />
      <button className='btn add-incoming'>Add Incoming</button>
     </form>


     <form>
      <p>Expense Sources</p>
      <input type='text' placeholder='Electric bill' />
      <p>Amount of expense</p>
     <input type='text' placeholder='' />


     <p>Date of expense</p>
   <input type='date' />
      <button className='btn add-expense'>Add Expense</button>
     </form>


     <form>
      <p>Target Saving</p>
      <input type='text' placeholder='' />


      <button>Reset</button>
     </form>



     <form>
      <p>Saving Amount</p>
      <input type='text' placeholder='' />


      <button>Enter</button>
     </form>

    </div>
  )
}

export default App;
