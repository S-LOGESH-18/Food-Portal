import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';
import './Register.css';
import axios from 'axios';
//----------------------------
class SignIn extends React.Component {
  constructor() {
    super()
    this.eref = React.createRef();
    this.pref = React.createRef();
    this.firstref = React.createRef();
    this.lastref = React.createRef();
    this.rpref = React.createRef();

    this.state = {
      m: (

        //=----==================================================================================================================---------

          <div id="Log1">
            <h1>---Login---</h1>
            <form>
              <label for="name"><b>&nbsp;Email_ID:</b></label>
              <br></br>
              <br></br>
              <TextField id="outlined-basic" type="text" label="Enter Email_Id" variant="outlined" inputRef={this.eref} required />
              <br></br>
              <br></br>
              <label for="Password-1"><b>&nbsp;Password:</b></label>
              <br></br>
              <br></br>
              <TextField id="outlined-basic" type="password" label="Enter Password" variant="outlined" inputRef={this.pref} required />
              <br></br>
              <br></br>
              <input type="checkbox" required></input>
              <label for="name"><b>&nbsp;Remember me</b></label>
              <br></br>
              <br></br>
              <Stack spacing={7} direction="row">
                <Button variant="contained" onClick={() => this.changem()} id="testbutton">Login</Button>
                <br></br> 
                <br></br>
                <Button variant="contained" onClick={() => this.changem12()} id="testbutton1">Sign up</Button>
              </Stack>
            </form>
          </div>

        //===================================================================================================================================
      )
    }
  };


        //===================================================================================================================================
  
  Validateemail(email) {
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailregex.test(email);

  }
  Validatepass(pass) {
    if(pass.length>6)
    {
      const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
      return passregex.test(pass);
    }
    else{
      console.log("Password must contains at leat 8 password")
    }
  }
  changem() {

    const email = this.eref.current.value;
    const pass = this.pref.current.value;
    axios.post('http://localhost:8080/user', { email, password: pass })
    .then(response => {
      // Handle successful login response
      console.log(response.data);
      // Update state or redirect to another page
    })
    .catch(error => {
      // Handle login error
      console.error('Login failed', error);
      alert('Login failed. Check your credentials and try again.');
    });

    if (!email || !pass) {
      alert("The Enter the required fields");
      return;
    }
    if (!this.Validateemail(email)) {
      alert("Please Enter the Valid Email");
      return;
    }
    if (!this.Validatepass(pass)) {
      alert("Please Enter the Valid Password");
      return;
    }
        //===================================================================================================================================
    this.setState(
      {
        m:
          <div id="Log20">
            <h2>Login  Successfully</h2>
            <img src="https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif" alt="error" height={200} width={250}></img>
            <br></br>
            <br></br>
            <Button component = { Link } to ='/Main' variant="contained"  id="testbutton5">&nbsp;Ok</Button>
          </div>
      }
    )
  }
        //===================================================================================================================================
  render() {
    return (

      <div>
        {this.state.m}
      </div>
    );
  }
}

export default SignIn;
