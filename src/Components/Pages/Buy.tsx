<<<<<<< HEAD:src/Components/Pages/Buy.js
import Search from "../UI/Search";

function Buy() {
  return (
    <div>
      <Search />
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));
const Buy = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
      }}
    >
      <Container>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Search"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <h1>Buy</h1>
      </Container>
>>>>>>> 93716f7eabf41628b280ea338b7de0110486d2d3:src/Components/Pages/Buy.tsx
    </div>
  );
}

export default Buy;
