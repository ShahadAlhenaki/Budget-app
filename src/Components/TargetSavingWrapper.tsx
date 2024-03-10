import React from "react";
import { useState } from "react";
import { TargetSavingForm } from "./TargetSavingForm";

type TargetSaving = {
  source: string;
  amount: number;
};

export function TargetSavingWrapper() {
  const [TargetSavings, setTargetSavings] = useState<TargetSaving[]>([]);
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

    const newTargetSaving = {
      source: source,
      amount: amount,
      date: new Date().toLocaleDateString(),
    };
    setTargetSavings([...TargetSavings, newTargetSaving]);
  };

  return (
    <>
      <TargetSavingForm
        handleChangeSource={handleChangeSource}
        handleChangeAmount={handleChangeAmount}
        handleSubmint={handleSubmint}
      />

      <ul>
        {TargetSavings.map((TargetSaving) => {
          return (
            <li>
              <p>{TargetSaving.source}</p>
              <p>{TargetSaving.amount}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
