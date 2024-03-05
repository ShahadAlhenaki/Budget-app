import React from 'react';
import { useState } from "react"
import { ExpenseForm } from "./ExpenseForm"

type Expense = {
    source: string,
    amount: number,
    date: string
  }
  
export function ExpenseWrapper(){

const [expenses, setExpenses] = useState<Expense[]>([])
const [source, setSource] = useState ('')
const [amount, setAmount] = useState (0)
// const [date, setDate] = useState (null)

const handleChangeSource = (e) => {
const value = e.target.value 
setSource(value)
}
const handleChangeAmount = (e) => {
  const value = e.target.value 
  setAmount(value)
  }

const handleSubmint = (e) => {
  e.preventDefault()

const newExpense = {
  source: source,
  amount:amount,
  date: new Date().toLocaleDateString()
}
setExpenses([...expenses, newExpense])
}

return(
<>
<ExpenseForm handleChangeSource={handleChangeSource}
  handleChangeAmount={handleChangeAmount}
  handleSubmint={handleSubmint} />
  
<ul>
  {
    expenses.map(expense => {
      return(
        <li>
         <p>{expense.source}</p> 
         <p>{expense.amount}</p>
         <p>{expense.date}</p>
        </li>
      )
    })}
  </ul>
</>
)
}