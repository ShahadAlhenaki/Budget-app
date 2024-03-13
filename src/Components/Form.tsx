import { Button, Grid, TextField } from "@mui/material";
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChangeEvent, FormEvent } from "react";

type Input = {
  name: string;
  id: string;
  label: string;
};

type FormProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmint: (e: FormEvent) => void;
  handleChangeDate: (value: any) => void;
  inputs: Input[];
};

export function Form({
  handleChange,
  handleSubmint,
  handleChangeDate,
  inputs,
}: FormProps) {
  return (
    <form onSubmit={handleSubmint}>
      <Grid container>
        {inputs.map((input) => {
          return (
            <Grid item xs={12} key={input.id}>
              <TextField
                name={input.name}
                id={input.id}
                label={input.label}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={handleChangeDate} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button color="success" variant="contained" type="submit">
            Add Income
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
