import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const addresses = ['台北市', '文山區', '指南路二段64號'];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        確認資料是否無誤
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            店家資訊
          </Typography>
          <Typography gutterBottom>統一編號</Typography>
          <Typography gutterBottom>店名</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            負責人聯絡方式
          </Typography>
          <Typography gutterBottom>姓名</Typography>
          <Typography gutterBottom>電話號碼</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
