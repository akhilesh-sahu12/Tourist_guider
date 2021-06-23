import React from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, Col, Row} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'

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
                               
                                <TextField required id="standard-required" label="Emai" type="email" /><br/>
                                <TextField id="standard-password-input" label="Password" type="password"  autoComplete="current-password"/><br/> 
                                <Button variant="success">Log in</Button>
                            </div>
                        </form>
                            <div className="text-center mt-2">
                               <Link className="singup-content-link" to='/newUser/signUp'>create account | signUp</Link>
                            </div>    
                    </div>
                </Col>
               
            </Row>
            </div>
        </section>
    
  );
}
