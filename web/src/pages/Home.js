import * as React from 'react';
import { Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';

const theme = createTheme();

function App() {
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
            實聯登記系統 - Home Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" align="center">
          Home Page
        </Typography>
        <Container component="main">
          <Grid container wrap="nowrap" sx={{ alignItems: 'center', flexDirection: "row", justifyContent: 'space-between' }}>
            <Grid item xs={6} sm={3} md={3} sx={{ mx: 1, my: 3 }}>
              <Card>
                <CardHeader
                  title="手機登記"
                  titleTypographyProps={{ align: 'center' }}
                  sx={{ py: 3, color: '#FFF', backgroundColor: '#2F8377' }}
                />
                <CardActions>
                  <Button href="/phone" fullWidth variant="contained">
                    <Link to="/phone" style={{ color: '#FFF', textDecoration: 'none' }}>
                      前往登記
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={3} sx={{ mx: 1, my: 3 }}>
              <Card>
                <CardHeader
                  title="場所登記"
                  titleTypographyProps={{ align: 'center' }}
                  sx={{ py: 3, color: '#FFF', backgroundColor: '#C84C47' }}
                />
                <CardActions>
                  <Button href="/address" fullWidth variant="contained">
                    <Link to="/address" style={{ color: '#FFF', textDecoration: 'none' }}>
                      前往登記
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={3} sx={{ mx: 1, my: 3 }}>
              <Card>
                <CardHeader
                  title="實聯登記"
                  titleTypographyProps={{ align: 'center' }}
                  sx={{ py: 3, color: '#FFF', backgroundColor: '#B3590F' }}
                />
                <CardActions>
                  <Button href="/reg" fullWidth variant="contained">
                    <Link to="/reg" style={{ color: '#FFF', textDecoration: 'none' }}>
                      前往登記
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={3} sx={{ mx: 1, my: 3 }}>
              <Card>
                <CardHeader
                  title="疫調查詢"
                  titleTypographyProps={{ align: 'center' }}
                  sx={{ py: 3, color: '#FFF', backgroundColor: '#00A65A' }}
                />
                <CardActions>
                  <Button href="/query" fullWidth variant="contained">
                    <Link to="/query" style={{ color: '#FFF', textDecoration: 'none' }}>
                      前往查詢
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container >
    </ThemeProvider >
    // <div>
    //   <a href="./address">SignUpAddress page</a>
    //   <a href="./phone">SignUpPhone page</a>
    //   <a href="./query">QueryPhone page</a>
    //   <a href="./reg">RegBeenPlace page</a>
    //   <a href="./home">Home page</a>
    // </div>
  );
}

export default App;
