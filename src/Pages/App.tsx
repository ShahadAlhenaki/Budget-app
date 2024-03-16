import { Income, IncomeWrapper } from "../Components/IncomeWrapper";
import { Expense, ExpenseWrapper } from "../Components/ExpenseWrapper";
import { TransferAccountWrapper } from "../Components/TransferAccountWrapper";
import { TargetSavingWrapper } from "../Components/TargetSavingWrapper";
import "../App.css";

import { Grid, Typography } from "@mui/material";
import { FormEvent, useState } from "react";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [targetSaving, setTargetSaving] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferError, settransferError] = useState("");

  //Way number 1 for any
  let totalIncome = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });

  //Way number 2 for any
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const balance = totalIncome - totalExpenses - currentSaving;

  const handleDeleteIncome = (id: number) => {
    const updatedIncomes = incomes.filter((income) => {
      return income.id !== id;
    });
    setIncomes(updatedIncomes);
  };

  const handleDeleteExpenses = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses(updatedExpenses);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (transferAmount <= balance) {
      setCurrentSaving((prevState) => {
        return prevState + transferAmount;
      });

      settransferError("");
    } else {
      settransferError("Not enough money in your balanc");
    }
    setTransferAmount(0);
  };

  const progress = (currentSaving / targetSaving) * 100 || 0;

  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container>
        <Grid item xs={12} md={4}>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
            handleDelete={handleDeleteIncome}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ExpenseWrapper
            expenses={expenses}
            setExpenses={setExpenses}
            handleDelete={handleDeleteExpenses}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TargetSavingWrapper
            setTargetSaving={setTargetSaving}
            currentSaving={currentSaving}
            targetSaving={targetSaving}
            progress={progress}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="">
        <Grid item xs={12} textAlign="center" marginTop={10}>
          <Typography>BALANCE: {balance}</Typography>
        </Grid>
        <Grid item xs={12} justifyContent="center" display="flex">
          <TransferAccountWrapper
            setTransferAmount={setTransferAmount}
            handleSubmit={handleSubmit}
            transferAmount={transferAmount}
          />
        </Grid>
        <Grid xs={12}>
          {transferAmount && (
            <Typography color="error">{transferError}</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
