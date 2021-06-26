import React from 'react'
import { Col,Row, Container, Button } from 'react-bootstrap'
import '../App.css'
import {LinkContainer} from 'react-router-bootstrap'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Card } from 'react-bootstrap';

const SecondScreenCard = ({secondscreen}) => {
  const Url = useParams()
  return (
    <div>
       <Card className="text-white s-screen-card my-4 text-center " style={{backgroundColor:'#a0ddf0'}}>
          <Card.Img src={secondscreen.imagesrc} alt="Card image" />  
          <Card.ImgOverlay>
              <Card.Title style={{fontSize:'25px'}} className="ss-card-title">{secondscreen.title}</Card.Title>
              <LinkContainer to={`/${Url.name}/${Url.place_type}/${Url.place_id}/${secondscreen._id}`} >
                   <button className="ss-card-button">About More</button>
              </LinkContainer>
          </Card.ImgOverlay>
      </Card>
    </div>

  );
};

export default SecondScreenCard;
// <LinkContainer to={`/${url.name}/${url.title}/${url.titleId}/${secondscreen.name}/${secondscreen._id}`}>


/*           <div className="ss-save-like-icon">
                    <Button><BookmarkIcon style={{fontSize:'30px'}}/></Button>
                    <Button><FavoriteIcon style={{fontSize:'30px'}} /></Button>
              </div>
*/