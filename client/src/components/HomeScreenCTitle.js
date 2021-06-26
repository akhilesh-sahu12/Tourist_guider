import React,{useState, useEffect} from 'react'
import '../App.css'
import axios from 'axios'
import { useParams } from 'react-router'
const HomeScreenCTitle = () => {

    
    const [Country, setCountry] = useState([])
    const Url  = useParams()
    let Urls = `/${Url.name}`
    if (!Url.name) {
        Urls=`/india`
    }
   

useEffect(() => {
    const CountryData = async() => {
        try {
            const {data} = await axios.get(Urls)
            setCountry(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
       
    }
    CountryData()
},[Url])

    return (
        <div className='hctbody p-4 '>
            <div className="home-screen-ctitle">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-5"></div>
                <div className="circle circle-6"></div>
                <div className="hct-model">
                    <div className="country-details">
                       <span style={{fontSize:'40px'}}>{Country.name}</span>
                    </div>
                    <hr/>
                    <div className="country-details">
                        {Country.description}
                    </div>
                    <hr/>
                        <div className="hst-details">
                                <span>Currency :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; {Country.currency}</span><br/>
                                <span>Population :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; {Country.population}</span><br/>
                                <span>Time Zone :</span><span style={{color:'#fff'}}> &nbsp;&nbsp;</span><br/>
                                <span>Weather :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; 25&#x2103;</span><br/>
                                <span>Area :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; {Country.area}</span><br/>
                                <span>Capital :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; {Country.capital}</span><br/>
                                <span>Official Language :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; {Country.language}</span><br/>
                                <span>calling code :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; {Country.dialing_code}</span><br/>
                                <span>Location :</span><span style={{color:'#fff'}}> &nbsp;&nbsp; {Country.location}</span>
                        </div>
                    <hr/>

                </div>
            </div>
        </div>
    )
}

export default HomeScreenCTitle
