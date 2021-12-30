import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import moment from 'moment'

const time = Date.now();
const PhoneNum='0912345678';
const PlaceID='03807654'
export default function Review() {    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        確認資料是否無誤
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            疫調登記
          </Typography>
          <Typography gutterBottom>場所代碼 </Typography>
          <Typography gutterBottom>{PlaceID}</Typography>
          <Typography gutterBottom>手機號碼 </Typography>
          <Typography gutterBottom>{PhoneNum}</Typography>
          <Typography gutterBottom>登記時間 </Typography>
          <Typography gutterBottom>{moment(time).format('YYYY-MM-DDTHH:mm:ss')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
