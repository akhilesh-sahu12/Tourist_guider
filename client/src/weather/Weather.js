import { Container,Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import React ,{useState,useEffect}from 'react'
import '../App.css'
import Clock from 'react-live-clock';
import axios from 'axios'
import { set } from 'lodash';
const Weather = () => {


    ///////////////////////////////////////////Weather API //////////////////////////////////////////

    const [Weather, setWeather] = useState('')
    const [CityName, setCityName] = useState('bhopal')
    
    useEffect(() => {
        const weatherData = async() => {
            try {
                const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric&appid=b0ae0985edaf0e0b11f5fa2866865c79`)
                setWeather(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        
        }
        weatherData()
    }, [CityName])

    /////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
        <div className="weather" style={{ backgroundImage:`url('/image/water.jpg')`}}>
            <div className="bubble">
                <img src="/image/buble.png"/>
                <img src="/image/buble.png"/>
                <img src="/image/buble.png"/>
                <img src="/image/buble.png"/>
                <img src="/image/buble.png"/>
                <img src="/image/buble.png"/>
                <img src="/image/buble.png"/>
            </div>
            <Container className="wether-container-main">
                <div className="wether-container">
                    <Row>
                        <Col xs={3} className="weather-title-col">
                            <div style={{width:'85%',margin:'auto'}}>
                                India
                            </div>
                        </Col>
                        <Col xs={6} className="weather-search-col">
                            <div style={{width:"90%",marginTop:'20px'}}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="City Name"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e)=>{
                                        setCityName(e.target.value)
                                    }}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xs={3} className="weather-time-col" >
                            <div style={{width:'85%',margin:'auto'}}>
                                {<Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />}
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    {!Weather ? (
                        <h1>CITY NOT FOUND</h1>
                    ):(
                        <Row className='my-4'>
                        <Col xs={6}>
                           <div className="weather-detail">
                                <div className="weather-detail-one">
                                    <span>{Weather.name}, India Weather</span>
                                </div>
                                <div className="weather-detail-two">
                                    <span>current weather</span>
                                </div>
                                <div className="weather-detail-three">
                                    <span style={{color:'yellow'}}>{Math.floor(Weather.main.temp)} &#8451;</span>
                                    <span style={{fontFamily:`Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif`, fontSize:'15px'}}>&nbsp;feel-like</span>
                                    <span style={{fontSize:'40px'}}>{Math.floor(Weather.main.feels_like)} &nbsp;</span>
                                    <img style={{width:'100px'}} src="/image/weather.png"/>
                                </div>
                                <div className="weather-detail-four">
                                    <sapn>{Weather.weather[0].description}</sapn>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="weather-detail-five my-3 p-3">
                                <div>
                                    <span style={{fontSize:'20px'}}>wind</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Math.floor(Weather.wind.speed*3.6)}</span><span style={{fontSize:'10px',color:'black',fontWeight:'bold'}}>km/h</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span style={{fontSize:'20px'}}>Could</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Weather.weather[0].description}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span style={{fontSize:'20px'}}>Visibility</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Weather.visibility/1000}</span><span style={{fontSize:'10px',color:'black',fontWeight:'bold'}}>km/h</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{fontSize:'20px'}}>Humidity</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Weather.main.humidity}</span><span style={{fontSize:'10px',color:'black',fontWeight:'bold'}}>%</span>
                                </div>
                                <br/>
                                <div>
                                    
                                    <span style={{fontSize:'20px'}}>Sunrise</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Weather.sys.sunrise}</span><span style={{fontSize:'10px',color:'black',fontWeight:'bold'}}>AM</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span style={{fontSize:'20px'}}>Sunset</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Weather.sys.sunrise}</span><span style={{fontSize:'10px',color:'black',fontWeight:'bold'}}>PM</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span style={{fontSize:'20px'}}>Pressure</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Weather.main.pressure/10}</span><span style={{fontSize:'10px',color:'black',fontWeight:'bold'}}>kpa</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{fontSize:'20px'}}>Max_temp</span><span style={{fontSize:'12px',color:'black',fontWeight:'bold'}}>{Weather.main.temp_max}</span><span style={{fontSize:'10px',color:'black',fontWeight:'bold'}}>&#8451;</span>
                                </div>
                                
                                
                                
                            </div>
                            
                        </Col>
                    </Row>
                    )}
                   
                    <hr/>
                </div>
                
            </Container>
        </div>
        </div>
    )
}

export default Weather
