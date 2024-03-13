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
};

export function ListItems({ items }: ListItemProps) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.source}</p>
            <p>{item.amount}</p>
            <p>{item.date}</p>
          </li>
        );
      })}
    </ul>
  );
}
