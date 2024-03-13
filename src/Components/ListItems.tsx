import { Button } from "@mui/material";
import { Expense } from "./ExpenseWrapper";
import { Income } from "./IncomeWrapper";

type Item = {
  id: number;
  source: string;
  amount: string;
  date: string;
};

type ListItemProps = {
  items: Expense[] | Income[];
  handleDelete: (key: number) => void;
};

export function ListItems({ items, handleDelete }: ListItemProps) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.source}</p>
            <p>{item.amount}</p>
            <p>{item.date}</p>
            <Button
              color="error"
              variant="contained"
              onClick={() => handleDelete(item.id)}
            >
              DELETE
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
