import React,{useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col, } from 'react-bootstrap'
import SecondScreenCard from './SecondScreenCard'
import { useParams } from 'react-router'
import axios from 'axios'



const SecondScreenitem = ({match}) => {

    const Url = useParams()
    const [Subplace, setSubplace] = useState([])

    useEffect(() => {
       const FechData = async() =>{
           try {
            const {data} = await axios.get(`/${Url.name}`) 
            const Allplace = data.places
            const Place = Allplace.find((e)=>e._id === match.params.place_id)
            setSubplace(Place.total_place)
           // countryDetail = vue[`${a[5]}`].find((d)=>d._id === match.params.id )

           } catch (error) {
               console.log(error)
           }
       }
       FechData()
    }, [])
   
    
   console.log(Subplace)
    return (
        <div>
            {!Subplace ? (
                <h1>DATA NOT FOUND</h1>
            ):(

                <div className="ss-card">
                      <Container>
                          <Row className="p-3 w-100" >
                              {
                                 Subplace.map((e)=>(
                                <Col>
                                  <SecondScreenCard
                                      secondscreen={e}
                                   />
                                 </Col>
                                 ))
                              }
                         </Row>
                     </Container>
                </div>
            )}
    
        </div>
    )
}



export default SecondScreenitem
