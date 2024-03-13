import { ChangeEvent, FormEvent, useState } from "react";
import { Dayjs } from "dayjs";

import { Form } from "./Form";
import { ListItems } from "./ListItems";


export type Income = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

const INCOME_INPUTS = [
  {
    name: "source",
    id: "source",
    label: "Income Source",
  },
  {
    name: "amount",
    id: "amount",
    label: "Income Amount",
  },
];

type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
};

export function IncomeWrapper({ incomes, setIncomes }: IncomeWrapperProps) {
  //const [incomes, setIncomes] = useState<Income[]>([]);
  const [income, setIncome] = useState<Income>({
    id: +new Date(),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIncome({
      ...income,
      [name]: value,
    });
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value)
      setIncome({
        ...income,
        date: value.toDate().toLocaleDateString(),
      });
  };

  const handleSubmint = (e: FormEvent) => {
    e.preventDefault();
    const newIncome: Income = {
      id: +new Date(),
      source: income.source,
      amount: +income.amount,
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);
  };

  return (
    <>
      <Form
        handleChangeDate={handleChangeDate}
        handleChange={handleChange}
        handleSubmint={handleSubmint}
        inputs={INCOME_INPUTS}
      />

      <ListItems items={incomes} />
    </>
  );
}
