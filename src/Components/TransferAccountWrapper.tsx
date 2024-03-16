import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";

type TransferAccountWrapperProps = {
  setTransferAmount: (key: number) => void;
  handleSubmit: (key: FormEvent) => void;
  transferAmount: number;
};

export function TransferAccountWrapper({
  setTransferAmount,
  handleSubmit,
  transferAmount,
}: TransferAccountWrapperProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setTransferAmount(valueAsNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} marginBottom={2}>
            <TextField
              name="saving"
              id="saving"
              label="Set Target"
              variant="outlined"
              onChange={handleChange}
              type="number"
              value={transferAmount}
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            style={{ margin: "0 auto" }}
          >
            Transfer To Saving Account
          </Button>
        </Grid>
      </form>
    </div>
  );
}
