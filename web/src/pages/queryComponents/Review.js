import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ID='A000000000';

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        確認資料是否無誤
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            疫調查詢
          </Typography>
          <Typography gutterBottom>身分證字號 </Typography>
          <Typography gutterBottom>{ID}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
