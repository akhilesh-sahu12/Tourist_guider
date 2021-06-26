import React from 'react'
import '../App.css'
import {Facebook,YouTube,Instagram,Twitter} from '@material-ui/icons';
import { LinkContainer } from 'react-router-bootstrap';
import {Form, Button} from 'react-bootstrap'
const Footer = () => {
    return (
      <div>
         <div className="row bg-dark w-100">
         <div className="col">
                <div className="footer-col mx-auto">
                    <div className="title-col">
                        <h4>Tourist Guider</h4>
                    </div>
                    <ul>
                        <li><a href="">About us</a></li>
                        <li><a href="">Sevices</a></li>
                        <li><a href="">privacy Policy</a></li>
                    </ul>
               </div>
            </div>
            
            <div className="col">
                <div className="footer-col mx-auto">
                    <div className="title-col">
                        <h4>Sevices</h4>
                    </div>
                    <ul>
                        <LinkContainer to='/live/weather'>
                           <li><a href="">Weather</a></li>
                        </LinkContainer>
                        <li><a href="">Map</a></li>
                        <li><a href="">Hotel</a></li>
                        <li><a href="https://www.irctc.co.in/nget/train-search">ticket</a></li>
                    </ul>
               </div>
            </div>
           
            <div className="col">
                <div className="footer-col mx-auto">
                    <div className="title-col">
                        <h4>Feedback</h4>
                    </div>
                      <Form.Control type="email" placeholder="email" className="my-2"/>
                      <Form.Control as="textarea" rows={3}  style={{width:"100%",height:'100px',background:'rgba(255,255,255,0.1)',border:'none',backdropFilter:'blur(10px)', color:'white'}}/>
                      <Button variant="success" type="submit" className="my-2" style={{width:'100%',fontSize:'20px'}}>Send</Button>
               </div>
            </div>
            <div className="col">
                <div className="footer-col mx-auto" style={{width:'350px'}}>
                    <div className="title-col">
                        <h4>Follow Us</h4>
                    </div>
                    <div className="footer-col-icon">
                        <button href="" className="btn"><Facebook/></button>
                        <button className="btn"><Instagram/></button>
                        <button className="btn"><Twitter/></button>
                        <button className="btn"><YouTube/></button>
                     </div>
               </div>
            </div>

         </div>
             
      </div>
    )
}

export default Footer
