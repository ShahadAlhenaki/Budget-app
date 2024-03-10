import { Button } from "./Button";

export function TargetSavingForm({
  handleChangeSource,
  handleSubmint,
  handleChangeAmount,
}) {
  return (
    <div>
      <form onSubmit={handleSubmint}>
        <div>
          <label htmlFor="expense_resource">Set target</label>
          <input
            type="text"
            name="resource"
            id="expense_resource"
            placeholder="write here"
            onChange={handleChangeSource}
          />
        </div>

        <Button label="Reset" />
      </form>
      <p>Current Saving:</p>
      <p value="">Target:</p>
      <label for="file">Progress:</label>
      <progress id="file" value="" max="100">
        {" "}
        3288%{" "}
      </progress>
    </div>
  );
}
