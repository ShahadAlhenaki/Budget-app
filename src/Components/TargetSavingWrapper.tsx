import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent } from "react";

type TargetSavingWrapperProps = {
  setTargetSaving: (key: number) => void;
  currentSaving: number;
  targetSaving: number;
  progress: number;
};

export function TargetSavingWrapper({
  setTargetSaving,
  currentSaving,
  targetSaving,
  progress,
}: TargetSavingWrapperProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setTargetSaving(valueAsNumber);
  };

  return (
    <div>
      <form>
        <Grid container>
          <Grid item xs={12} marginBottom={2}>
            <TextField
              name="saving"
              id="saving"
              label="Set Target"
              variant="outlined"
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Button type="reset" variant="contained" style={{ margin: "0 auto" }}>
            Reset
          </Button>
          <Grid item xs={12} marginBottom={2}>
            <Typography variant="body1">
              Current Saving {currentSaving}
            </Typography>
          </Grid>
          <Grid item xs={12} marginBottom={2}>
            <Typography>Target {targetSaving}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress variant="determinate" value={progress} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >{`${Math.round(progress)}%`}</Typography>
          </Box>
        </Box>
      </form>
    </div>
  );
}
