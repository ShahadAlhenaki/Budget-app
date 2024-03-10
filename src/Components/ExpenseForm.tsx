import { Button } from "./Button";

export function ExpenseForm({
  handleChangeSource,
  handleSubmint,
  handleChangeAmount,
}) {
  return (
    <form onSubmit={handleSubmint}>
      <div>
        <label htmlFor="expense_resource">Expense source</label>
        <input
          type="text"
          name="resource"
          id="expense_resource"
          placeholder="write here"
          onChange={handleChangeSource}
        />
      </div>

      <div>
        <label htmlFor="expense_amount">Amount of expense</label>
        <input
          type="text"
          name="amount"
          id="expense_amount"
          placeholder="wow"
          onChange={handleChangeAmount}
        />
      </div>

      <div>
        <label htmlFor="expense_date">Date of expense</label>
        <input type="date" name="date" id="expense_date" />
      </div>
      <Button label="Add expense" />
    </form>
  );
}
