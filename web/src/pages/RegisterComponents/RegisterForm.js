import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        疫調登記
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="PlaceID"
            name="PlaceID"
            label="場所代碼"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="PhoneNum"
            name="PhoneNum"
            label="手機號碼"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="date"
            name="date"
            label="日期"
            defaultValue={"2021-03-01"}
            fullWidth
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="time"
            name="time"
            label="時間"
            defaultValue={"21:00"}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
