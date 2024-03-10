import React from "react";
import { useState } from "react";
import { SavingAmountForm } from "./SavingAmountForm";

type SavingAmount = {
  source: string;
  amount: number;
};

export function SavingAmountWrapper() {
  const [SavingAmounts, setSavingAmounts] = useState<SavingAmount[]>([]);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);

  const handleChangeSource = (e) => {
    const value = e.target.value;
    setSource(value);
  };
  const handleChangeAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  const handleSubmint = (e) => {
    e.preventDefault();

    const newSavingAmount = {
      source: source,
      amount: amount,
    };
    setSavingAmounts([...SavingAmounts, newSavingAmount]);
  };

  return (
    <>
      <SavingAmountForm
        handleChangeSource={handleChangeSource}
        handleChangeAmount={handleChangeAmount}
        handleSubmint={handleSubmint}
      />

      <ul>
        {SavingAmounts.map((SavingAmount) => {
          return (
            <li>
              <p>{SavingAmount.source}</p>
              <p>{SavingAmount.amount}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
