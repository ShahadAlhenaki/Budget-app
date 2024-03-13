import { Income, IncomeWrapper } from "../Components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "../Components/ExpenseWrapper";
import { SavingAmountWrapper } from "../Components/SavingAmountWrapper";
import { TargetSavingWrapper } from "../Components/TargetSavingWrapper";
import "../App.css";

import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleDeleteIncome = (id: number) => {
    const updatedIncomes = incomes.filter((income) => {
      return income.id !== id;
    });
    console.log(updatedIncomes);
    setIncomes(updatedIncomes);
  };

  const handleDeleteExpenses = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });
    console.log(updatedExpenses);
    setExpenses(updatedExpenses);
  };

  //Way number 1 for any
  let totalIncome = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });

  //Way number 2 for any
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container>
        <Grid item xs={12} md={6}>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
            handleDelete={handleDeleteIncome}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ExpenseWrapper
            expenses={expenses}
            setExpenses={setExpenses}
            handleDelete={handleDeleteExpenses}
          />
        </Grid>

        <SavingAmountWrapper />
        <TargetSavingWrapper />
      </Grid>
      <Typography>BALANCE: {balance}</Typography>
      <Link to="/about">About Us Page </Link>
    </div>
  );
}

export default App;
