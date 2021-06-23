import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, Col, Row} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [user, setUser] = useState({
    name:'', email:'', phone:'', password:'', cpassword:''
  })

let name, value
const handleInput= (e) =>{
  name = e.target.name
  value = e.target.value

  setUser({...user,[name]:value})
}

const handleSubmit = async(e) => {
  e.preventDefault()
  try {
    const { name, email, phone, password, cpassword} = user
    console.log(name, email, phone, password, cpassword)
    const res = await fetch('./register',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
         name, email, phone, password, cpassword
        })
    })
    const data = await res.json()

    if (res.status===422){
      toast('Registration failed')
    }else{
      toast('Registration Sucessfull')
    }

  } catch (error) {
    console.log(error)
  }
  
}
  
  return (
   
        <section className="singup">
            <div className="singup-content">
            <Row>
                <Col>
                    <div style={{ width:'260px',margin:'auto'}}>
                        <div className="signUp text-center">
                           Sign Up
                        </div>
                        <form method="POST" className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField required id="standard-required" label="username" type="text" autoComplete="off" name="name" value={user.name}  onChange={handleInput} /><br/>
                                <TextField required id="standard-required" label="Emai" type="email" autoComplete="off" name="email" value={user.email} onChange={handleInput} /><br/>
                                <TextField id="standard-number" label="Mobile Number"  type="number" autoComplete="off" name="phone" value={user.phone} onChange={handleInput} /><br/>
                                <TextField id="standard-password-input" label="Password" type="password"  autoComplete="off" name="password" value={user.password} onChange={handleInput} /><br/>
                                <TextField id="standard-password-input" label="Confirm Password" type="password"  autoComplete="off"   name="cpassword" value={user.cpassword} onChange={handleInput} /><br/>
                                <Button variant="success" type="submit" onClick={handleSubmit} >Register</Button>
                                <ToastContainer />
                            </div>
                        </form>
                            <div className="text-center mt-2">
                               <Link className="singup-content-link" to='/user/signIn'>already register | Login</Link>
                            </div>    
                    </div>
                </Col>
               
            </Row>
            </div>
          
        </section>
        
    
  );
}
  