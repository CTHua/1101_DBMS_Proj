import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function App() {
  const classes = useStyles();
  // const idRef = React.useRef();

  // const originalRows = [];
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

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    console.log(searchedVal);
    const filteredRows = originalRows.filter((row) => {
      return row.id.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <Toolbar style={{
          backgroundColor: "#009393",
          color: "#FFFFFF"}}>
          <Typography variant="h6" color="inherit" noWrap>
            疫調查詢
          </Typography>
        </Toolbar>
        <SearchBar
          id='searchBar'
          value={searched}
          onRequestSearch ={(searchVal) => requestSearch(searchVal)}
          // onClick={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <br></br>
        <Box textAlign='center'>
          <Button style={{
            backgroundColor: "#E3E3E3",
            justifyContent: 'center',
            width: "25%"}}
            variant="contained"
            onClick={() => requestSearch(document.getElementById("searchBar").value)}>
            搜尋
          </Button>
        </Box>
        <br></br>
        
        <TableContainer style={{ maxHeight: 500 }}>
          <Table stickyHeader className={classes.table} aria-label="simple table">
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
      </Paper>
      <br></br>

      <Button style={{
        color: "#FF0000"}} 
        variant="outlined" href="./home">
        Home Page
      </Button>
    </>
  );
}

export default App;
