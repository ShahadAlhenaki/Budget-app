import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const incomes = [
  {
    id: 1,
    source: "Salary",
  },
  {
    id: 2,
    source: "Father",
  },
  {
    id: 3,
    source: "Mother",
  },
];

export function Income() {
  const params = useParams();
  const income = incomes.find(
    (income) => income.id === Number(params.incomeId)
  );

  if (!income) {
    return (
      <div>
        <Typography variant="h1">Income not found</Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h1">Income Page</Typography>
      <Typography variant="h3">{income.source}</Typography>
    </div>
  );
}
