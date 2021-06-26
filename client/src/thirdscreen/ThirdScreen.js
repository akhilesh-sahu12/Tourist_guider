import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import '../App.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import Clock from 'react-live-clock';
import {Link} from 'react-router-dom'
import HotelIcon from '@material-ui/icons/Hotel';
import CloudSharpIcon from '@material-ui/icons/CloudSharp';
import FlightTakeoffSharpIcon from '@material-ui/icons/FlightTakeoffSharp';
import LocationOn from '@material-ui/icons/LocationOn'




const ThirdScreen = ({match}) => {

    const Url = useParams()
    const [Detail, setDetail] = useState([])


    useEffect(() => {
        const fechData = async() =>{
            try {
                const {data} = await axios.get(`/${Url.name}`) 
                const Allplace = data.places
                const Place = Allplace.find((e)=>e._id === match.params.place_id)
                const Findplace = Place.total_place
                const ExactPlace = Findplace.find((e)=>e._id === match.params.loction_id)
                setDetail(ExactPlace)
                
            } catch (error) {
                console.log(error)
            }
        }
        fechData()
     }, [])
    



////////////////<WEATHER>////////////////////

const [weather, setWeather] = useState('')

useEffect(()=>{
    const weatherInfo = async() =>{
        try {
            const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=singrauli&units=metric&appid=b0ae0985edaf0e0b11f5fa2866865c79')
            setWeather(data)
            console.log(data.main.temp)
        } catch (error) {
            console.log(error)
        }
        
    }
    weatherInfo()
},[])

console.log(weather)

//////////////////////////////////////////////////






     
    return (
    <div className="tt">
        <div className="tt-body">
           <div className="circle circle-1"></div>
           <div className="circle circle-2"></div>
           <div className="circle circle-3"></div>
           <div className="circle circle-4"></div>
           <div className="circle circle-5"></div>
           <div className="circle circle-6"></div>
           <div className="circle circle-7"></div>
           <div className="circle circle-8"></div>
           <div className="circle circle-9"></div>
           <div className="circle circle-10"></div>
           <div className="circle circle-11"></div>
           <div className="tt-color-bubble">
               <img src="/image/color.png" />
               <img src="/image/color.png" />
               <img src="/image/color.png" />
               <img src="/image/color.png" />
               <img src="/image/color.png" />
               <img src="/image/color.png" />
               <img src="/image/color.png" />
           </div>
        </div>
        <div className="tt-details-main">
            <div className="tt-image p-5">
                <div className="tt-image-div">
                   <img src={Detail.imagesrc} />
                </div>
            </div>
             <div className="tt-details my-5">
                 <div className="text-center my-2" style={{fontSize:'30px', fontWeight:'bold'}}>
                     {Detail.title}
                 </div>
                 <hr/>
                 <div style={{fontSize:'20px', fontWeight:'bold'}}>
                    {Detail.description}
                 </div>
             </div>
             {!weather ? (<h1>Not Found</h1>):(
                   <div className="tt-details">
                   <div className="tt-weather">
                       <img src="/image/cloudy.png" />
                       <span>&nbsp;Weather</span>
                   </div>
                   <hr/>
                   <div className="tt-weather-detail">
                       <div className="row">
                           <div className="col">
                               <div className="mx-auto">
                               <span style={{fontSize:'20px'}}>CURRENT WEATHER</span><br/>
                               <span style={{color:'rgba(255,255,255,0.7)'}}>{<Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />}</span>
                               <div className="tt-temp">
                                    <br/><img src="https://image.flaticon.com/icons/png/128/869/869869.png" />&nbsp;&nbsp;&nbsp;
                                    <span>{Math.floor(weather.main.temp)}&#8451;</span>
                               </div>
                               <div className='tt-feellike'>
                                   <span>RealFeel - {Math.floor(weather.main.feels_like)} &#8451;</span>
                               </div>
                               <div style={{fontSize:'20px'}}>
                                   <span>{weather.weather[0].main}</span>
                               </div>
                           </div>
                        </div>


                           <div className="col"> 
                               <div style={{fontSize:"20px"}} className="mx-auto mt-5">
                                    <div className="tt-weather-col2">
                                        <span>Could</span>
                                        <span>{weather.weather[0].description}</span>
                                    </div>
                                    <hr/>
                                    <div className="tt-weather-col2">
                                        <span>Wind</span>
                                        <span>{Math.floor(weather.wind.speed*3.6)}&nbsp;km/h</span>
                                    </div>
                                    <hr/>
                                    <div className="tt-weather-col2">
                                        <span>Wind Gusts</span>
                                        <span>{Math.floor(weather.wind.gust*3.6)}&nbsp;km/h</span>
                                    </div>
                                    <div className="tt-wether-link"><br/>
                                        MORE DETAILS &#x2192;
                                    </div>
                                </div>
                                
                           </div>


                       </div>
                   </div>
                   <hr/>
               </div>
             )}
           
             <div className="tt-details">
                <hr/>
                    <div className="tt-nav">
                        <div className="row">
                            <div className="col text-center">
                                <a href=""><LocationOn/> Location</a>
                            </div>
                            <div className="col text-center">
                                 <a href=""><HotelIcon/>&nbsp;Hotel</a>
                            </div>
                            <div className="col text-center">
                                <a href=""><CloudSharpIcon/>&nbsp; Weather</a>
                            </div>
                            <div className="col text-center">
                                <a href=""><FlightTakeoffSharpIcon/>&nbsp;Book trip</a>
                            </div>

                        </div>
                        
                    </div>
                <hr/>
             </div>
             
        </div>
    </div>
    )
}
export default ThirdScreen
