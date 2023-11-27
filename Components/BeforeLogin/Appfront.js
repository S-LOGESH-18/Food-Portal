// App.js
import React from 'react';
import { Button } from '@mui/material';
import './A.css';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function AppFront() {
  return (
    <div id="Log1">
      <div>
        <h2>Welcome to OrderRo - Your Ultimate Food Ordering Portal!</h2>
        <p>
          At OrderRo, we're here to satisfy your cravings and make your dining experience delightful.
          Explore a world of culinary delights from the comfort of your home. Whether you're in the mood
          for a hearty meal, a quick snack, or a sweet treat, we have something for every palate.
        </p>

        <h2>About OrderRo</h2>
        <p>
          OrderRo is your go-to platform for seamless and convenient food ordering. Browse through our
          curated menu featuring a diverse range of cuisines. Place your order with just a few clicks
          and enjoy the convenience of doorstep delivery. Quality, taste, and satisfaction are our top
          priorities.
        </p>

        <form>
          <Stack spacing={7} direction="row">
            <Button component={Link} to="/Login" variant="contained" id="testbutton5">
              &nbsp;Login Here
            </Button>
            <br></br>
            <br></br>
            <Button component={Link} to="/SignUp" variant="contained" id="testbutton7">
              &nbsp;Sign Up
            </Button>
            <br></br>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default AppFront;
