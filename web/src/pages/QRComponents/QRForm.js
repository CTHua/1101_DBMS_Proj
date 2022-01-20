import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        QR掃碼
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <img src={require('./test.jpg')} alt="Background"/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
