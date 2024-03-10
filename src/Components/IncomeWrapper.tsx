import React from 'react';
import { useState } from "react"
import { IncomeForm } from "./IncomeForm"

type Income = {
    source: string,
    amount: number,
    date: string
  }
  

export function IncomeWrapper(){

const [incomes, setIncomes] = useState<Income[]>([])
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

const newIncome = {
  source: source,
  amount:amount,
  date: new Date().toLocaleDateString()
}
setIncomes([...incomes, newIncome])
}


return(
<>
<IncomeForm 
  handleChangeSource={handleChangeSource} 
  handleChangeAmount={handleChangeAmount} 
  handleSubmint={handleSubmint} />

<ul>
  {
    incomes.map(income => {
      return(
        <li>
         <p>{income.source}</p> 
         <p>{income.amount}</p>
         <p>{income.date}</p>
        </li>
      )
    })}
  </ul>
</>
)
}