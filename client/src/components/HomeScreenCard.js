import React from 'react'
import {Card} from 'react-bootstrap'
import { useParams } from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'




const HomeScreenCard = ({homeplace}) => {
    const url = useParams()
    let urls = url.name
    if (!url.name) {
        urls = 'india'
    }
    return (
        <div>
        <Card className="text-white home-screen-card my-4 text-center">
                <Card.Img src={homeplace.imagesrc} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className="card-title" style={{fontSize:'40px',textShadow:"2px 7px 5px rgba(0,0,0,0.3),0px -4px 10px rgba(255,255,255,0.3)"}}>{homeplace.place_type}</Card.Title>
                <LinkContainer to={`/${urls}/${homeplace.place_type}/${homeplace._id}`}>
                   <button className="card-button">Explore</button>
                </LinkContainer>
                
           </Card.ImgOverlay>
       </Card>
        </div>
    )
}

export default HomeScreenCard
