import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import QueryForm from './queryComponents/QueryForm';
import Review from './queryComponents/Review';

const originalRows = [
  { id:"A000000000", name: "Pizza", date:"2021/1/1 00:00", placeId: "000000", place: "Place A", pNo: "0900000000" },
  { id:"A000000001", name: "Hot Dog", date:"2021/1/2 00:01", placeId: "000001", place: "Place B", pNo: "0900000001" },
  { id:"A000000010", name: "Burger", date:"2021/1/3 00:10", placeId: "000010", place: "Place C", pNo: "0900000010"  },
  { id:"A000000011", name: "Hamburger", date:"2021/1/4 00:11", placeId: "000011", place: "Place D", pNo: "0900000011" },
  { id:"A000000100", name: "Fries", date:"2021/1/5 01:00", placeId: "000100", place: "Place E", pNo: "0900000100" },
  { id:"A000000101", name: "Ice Cream", date:"2021/1/6 01:01", placeId: "000101", place: "Place F", pNo: "0900000101" },
  { id:"A000000110", name: "Pizza", date:"2021/1/1 00:00", placeId: "000000", place: "Place A", pNo: "0900000000" },
  { id:"A000000111", name: "Hot Dog", date:"2021/1/2 00:01", placeId: "000001", place: "Place B", pNo: "0900000001" },
  { id:"A000001000", name: "Burger", date:"2021/1/3 00:10", placeId: "000010", place: "Place C", pNo: "0900000010"  },
  { id:"A000001001", name: "Hamburger", date:"2021/1/4 00:11", placeId: "000011", place: "Place D", pNo: "0900000011" },
  { id:"A000001010", name: "Fries", date:"2021/1/5 01:00", placeId: "000100", place: "Place E", pNo: "0900000100" },
  { id:"A000001011", name: "Ice Cream", date:"2021/1/6 01:01", placeId: "000101", place: "Place F", pNo: "0900000101" },
  { id:"A000001100", name: "Pizza", date:"2021/1/1 00:00", placeId: "000000", place: "Place A", pNo: "0900000000" },
  { id:"A000001101", name: "Hot Dog", date:"2021/1/2 00:01", placeId: "000001", place: "Place B", pNo: "0900000001" },
  { id:"A000001110", name: "Burger", date:"2021/1/3 00:10", placeId: "000010", place: "Place C", pNo: "0900000010"  },
  { id:"A000001111", name: "Hamburger", date:"2021/1/4 00:11", placeId: "000011", place: "Place D", pNo: "0900000011" },
  { id:"A000000002", name: "Fries", date:"2021/1/5 01:00", placeId: "000100", place: "Place E", pNo: "0900000100" },
  { id:"A000000003", name: "Ice Cream", date:"2021/1/6 01:01", placeId: "000101", place: "Place F", pNo: "0900000101" },
  { id:"A000000004", name: "Pizza", date:"2021/1/1 00:00", placeId: "000000", place: "Place A", pNo: "0900000000" },
  { id:"A000000005", name: "Hot Dog", date:"2021/1/2 00:01", placeId: "000001", place: "Place B", pNo: "0900000001" },
  { id:"A000000006", name: "Burger", date:"2021/1/3 00:10", placeId: "000010", place: "Place C", pNo: "0900000010"  },
  { id:"A000000007", name: "Hamburger", date:"2021/1/4 00:11", placeId: "000011", place: "Place D", pNo: "0900000011" },
  { id:"A000000008", name: "Fries", date:"2021/1/5 01:00", placeId: "000100", place: "Place E", pNo: "0900000100" },
  { id:"A000000009", name: "Ice Cream", date:"2021/1/6 01:01", placeId: "000101", place: "Place F", pNo: "0900000101" }
];

const steps = ['查詢資料', '資料確認'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <QueryForm />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

function App() {
  const [rows, setRows] = React.useState(originalRows);
  const requestSearch = (searchedVal) => {
    console.log(searchedVal);
    const filteredRows = originalRows.filter((row) => {
      return row.id.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep === steps.length - 1){
      requestSearch("A00000000")
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            實聯登記系統 - 疫調查詢
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            疫調查詢
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                {/* <Typography variant="h5" gutterBottom>
                  查詢完成！！
                </Typography> */}
                <TableContainer style={{ maxHeight: 400 }}>
                  <Table stickyHeader className={theme.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>身分證號碼</TableCell>
                        <TableCell align="right">姓名</TableCell>
                        <TableCell align="right">時間</TableCell>
                        <TableCell align="right">場所ID</TableCell>
                        <TableCell align="right">場所名稱</TableCell>
                        <TableCell align="right">手機號碼</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.date}</TableCell>
                          <TableCell align="right">{row.placeId}</TableCell>
                          <TableCell align="right">{row.place}</TableCell>
                          <TableCell align="right">{row.pNo}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      上一步
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? '完成' : '下一步'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <a href="./home">Home page</a>
      </Container>
    </ThemeProvider>
  );
}

export default App;
