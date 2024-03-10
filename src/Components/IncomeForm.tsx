import { Grid, TextField } from "@mui/material";
import { Button } from "./Button";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function IncomeForm({
  handleChangeSource,
  handleSubmint,
  handleChangeAmount,
}) {
  return (
    <form onSubmit={handleSubmint}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <TextField
            id="outlined-basic"
            label="Income source"
            variant="outlined"
            placeholder="write here"
            onChange={handleChangeSource}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            name="amount"
            id="income_amount"
            label="Amount of income"
            variant="outlined"
            placeholder="wow"
            onChange={handleChangeAmount}
          />
        </Grid>
        <Grid xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </Grid>
        <Grid xs={12}>
          <Button label="Add income" />
        </Grid>
      </Grid>
    </form>
  );
}
