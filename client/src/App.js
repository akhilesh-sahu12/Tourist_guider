import React from 'react'
import Header from './components/Header'
import HeaderCarousel from './components/HeaderCarousel'
import HomeScreenCardItem from './components/HomeScreenCardItem'
import HomeScreenMap from './components/HomeScreenMap'
import HomeScreenNav from './components/HomeScreenNav'
import Footer from './components/Footer'
import ThirdScreen from './thirdscreen/ThirdScreen'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SecondScreenitem from './secondscreen/SecondScreenitem'
import Signup from './authentication/Signup'
import Signin from './authentication/Signin'
import Weather from './weather/Weather'
import HomeScreenCTitle from './components/HomeScreenCTitle'
import UserData from './authentication/UserData'

const App = () => {
    return (
        <Router>
                <Header/>
                <Route exact path={['/',"/:name"]} component={HeaderCarousel} />
                <Route exact path={['/',"/:name"]} component={HomeScreenNav} />
                <Route exact path={['/',"/:name"]} component={HomeScreenCTitle} />
                <Route exact path={['/',"/:name"]} component={HomeScreenCardItem} />
                <Route exact path={['/',"/:name"]} component={HomeScreenMap} />
                <Route exact path={['/',"/:name"]} component={Footer} />
                <Route exact path="/:name/:place_type/:place_id" component={SecondScreenitem}/>
                <Route exact path="/:name/:place_type/:place_id/:loction_id" component={ThirdScreen}/>
                <Route exact path="/live/weather" component={Weather}/>
                
        </Router>
    )
}

export default App
