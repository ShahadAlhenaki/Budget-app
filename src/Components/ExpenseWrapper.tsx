import { ChangeEvent, FormEvent, useState } from "react";

import { Form } from "./Form";
import { ListItems } from "./ListItems";

export type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

const EXPENSE_INPUTS = [
  {
    name: "source",
    id: "source",
    label: "Expense Source",
  },
  {
    name: "amount",
    id: "amount",
    label: "Expense Amount",
  },
];

type ExpenseWrapperProps = {
  expenses: Expense[];
  setExpenses: (key: Expense[]) => void;
};

export function ExpenseWrapper({ expenses, setExpenses }: ExpenseWrapperProps) {
  const [expense, setExpense] = useState<Expense>({
    id: +new Date(),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleChangeDate = (value: any) => {
    setExpense({
      ...expense,
      date: value.toDate().toLocaleDateString(),
    });
  };

  const handleSubmint = (e: FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: +new Date(),
      source: expense.source,
      amount: +expense.amount,
      date: expense.date,
    };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <>
      <Form
        handleChangeDate={handleChangeDate}
        handleChange={handleChange}
        handleSubmint={handleSubmint}
        inputs={EXPENSE_INPUTS}
      />

      <ListItems items={expenses} />
    </>
  );
}
