import React,{useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col, } from 'react-bootstrap'
import SecondScreenCard from './SecondScreenCard'
import { useParams } from 'react-router'
import axios from 'axios'


const SecondScreenitem = () => {

    const url = useParams()
    const urlTitle = url.title
    const [Subplace, setSubplace] = useState([])

    useEffect(() => {
       const fechData = async() =>{
           try {
            const {data} = await axios.get(`/${url.name}`) 
            const a = Object.keys(data[url.titleId])
            var vue = data[url.titleId]
            setSubplace(vue[`${a[5]}`])
           } catch (error) {
               console.log(error)
           }
       }
       fechData()
    }, [])
   
    
   console.log(Subplace)
    return (
        <div>
        <div className="ss-card">
        <Container>
           <Row className="p-3 w-100" >
                {
                Subplace.map((secondscreen)=>(
                        <Col>
                            <SecondScreenCard
                                secondscreen={secondscreen}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
        </div>
        </div>
    )
}

export default SecondScreenitem
