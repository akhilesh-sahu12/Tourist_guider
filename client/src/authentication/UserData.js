import React from 'react'
import '../App.css'
import {Col } from 'react-bootstrap'

const UserData = () => {
    return (
        <section>
            <div className="main-container">
                <div className="row">
                    <div className="col">
                        <div className="profile-image">
                            <img src="/image/goa.jpg" />
                        </div>
                        <div className="username text-center">
                            <span>Sadabrij Shah</span>
                        </div>
                    </div>
                    <div className="col">
                         <hr/>
                        <div className="userdetails">
                            <span>Name</span><span>-</span><span style={{color:"grey"}}>Sadabrij Shah</span>
                        </div>
                        <hr/>
                        <div className="userdetails">
                            <span>Email</span><span>-</span><span style={{color:"grey"}}>sadabrijshah992@gmail.com</span>
                        </div>
                        <hr/>
                        <div className="userdetails">
                            <span>Password</span><span>-</span><span style={{color:"grey"}}>sadabrij!@#$%12345</span>
                        </div>
                        
                    </div>
                    <div className="col">
                         <hr/>
                        <div className="userdetails">
                            <span>Mobile No.</span><span>-</span><span style={{color:"grey"}}>8463818896</span>
                        </div>
                        <hr/>
                        <div className="userdetails">
                            <span>Address</span><span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span><span style={{color:"grey"}}>Majan mode, waidhan, singrauli, Madhya Pradesh 486886</span>
                        </div>
                         
                    </div>

                </div>
                <div className="row usercardrow">
                    <div class="text-center bg-dark savedcard">
                        <h4 style={{fontFamily:'sans-serif',color:'#fff'}}> Saved Destination</h4>
                    </div>
                    <Col>
                        <div className="savedcardimg mx-auto">
                            <img src="/image/goa.jpg" />
                        </div>
                    </Col>
                    <Col>
                      <div className="savedcardetails mx-auto">
                            
                        </div>
                    </Col>
                </div>
            </div>
        </section>
    )
}

export default UserData
