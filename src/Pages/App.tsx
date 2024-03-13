import { Income, IncomeWrapper } from "../Components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "../Components/ExpenseWrapper";
import { SavingAmountWrapper } from "../Components/SavingAmountWrapper";
import { TargetSavingWrapper } from "../Components/TargetSavingWrapper";
import "../App.css";

import { Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

// const incomesTest = [
//   {
//       id:1,
//       source:"Salary",
//   },
//   {
//       id:2,
//       source:"Father",
//   },
//   {
//       id:3,
//       source:"Mother",
//   },
// ]

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

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
          <IncomeWrapper incomes={incomes} setIncomes={setIncomes} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ExpenseWrapper expenses={expenses} setExpenses={setExpenses} />
        </Grid>

        <SavingAmountWrapper />
        <TargetSavingWrapper />
      </Grid>

      <Link to="/about">About Us Page </Link>

      {/* <ul>
{incomesTest.map((income) => {
  return(
    <li>
      <Link to={'/incomes/%{income.id}'}>income{income.source}</Link>
    </li>
  )
})}
</ul> */}
    </div>
  );
}

export default App;
