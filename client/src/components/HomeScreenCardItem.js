import React,{useState,useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import HomeScreenCard from './HomeScreenCard'
import { useParams } from 'react-router'
import axios from 'axios'





const HomeScreenCardItem = () => {


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
            setCountry(data.places)
        } catch (error) {
            console.log(error)
        }
       
    }
    CountryData()
},[Url])

 
  
 
return (
          
    <div>
   
        <Row className="home-screen-container my-3 p-3 w-100" >
            {
               Country.map((homeplace)=>(
                    <Col>
                        <HomeScreenCard
                            homeplace={homeplace}
                        />
                    </Col>
                ))
            }
        </Row>
    </div>
)
}

export default HomeScreenCardItem
