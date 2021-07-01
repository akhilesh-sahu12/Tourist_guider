import React,{useState} from 'react';
import { useHistory } from 'react-router';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Col, Row} from 'react-bootstrap'
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

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory()

  const [user, setUser] = useState({
     email:'',  password:''
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
    const {email, password} = user
    const res = await fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
          email, password
        })
    })
    const data = await res.json()

    if (res.status===422){
      toast.error('invalid credentials', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else{
      toast.success('Login successful', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        history.push('/')
    }

  } catch (error) {
    console.log(error)
  }
}

  return (
   
        <section className="singup">
            <div className="singin-content">
            <Row>
                <Col>
                    <div style={{ width:'260px',margin:'auto'}}>
                        <div className="signUp text-center">
                           <span>Log in</span>
                        </div>
                        <form  method="POST" className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField required id="standard-required" label="Emai" type="email" autoComplete="off" name="email" value={user.email} onChange={handleInput} /><br/>
                                <TextField id="standard-password-input" label="Password" type="password"  autoComplete="off" name="password" value={user.password} onChange={handleInput} /><br/>
                                <Button variant="success" onClick={handleSubmit}>Log in</Button>
                            </div>
                        </form>
                            <div className="text-center mt-2">
                               <Link className="singup-content-link" to='/user/resister'>create account | signUp</Link>
                            </div>    
                    </div>
                </Col>
               
            </Row>
            </div>
              <ToastContainer/>
        </section>
    
  );
}
