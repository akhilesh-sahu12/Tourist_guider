import React,{useState,useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import HomeScreenCard from './HomeScreenCard'
import { useParams } from 'react-router'
import axios from 'axios'





const HomeScreenCardItem = () => {


    const [Country, setCountry] = useState([])
    const url  = useParams()
    let urls = `/${url.name}`
    if (!url.name) {
        urls=`/india`
    }
   

useEffect(() => {
    const countryData = async() => {
        try {
            const {data} = await axios.get(urls)
            setCountry(data)
            
        } catch (error) {
            console.log(error)
        }
       
    }
    countryData()
    
})

 
  
 
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
