import React from 'react'
import { Container } from 'react-bootstrap'

const HomeScreenMap = () => {
    const url = "https://www.google.com/maps/d/embed?mid=1pXxoY2c_9QxAT5_bJmd01vNR9U-Ocqwv"
    return (
        <Container className="map my-3">
            <iframe src = {url}  ></iframe>
        </Container>
    )
}

export default HomeScreenMap
