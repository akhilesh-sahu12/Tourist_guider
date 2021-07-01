import React from 'react'
import Header from './components/Header'
import HeaderCarousel from './components/HeaderCarousel'
import HomeScreenCardItem from './components/HomeScreenCardItem'
import HomeScreenMap from './components/HomeScreenMap'
import HomeScreenNav from './components/HomeScreenNav'
import Footer from './components/Footer'
import ThirdScreen from './thirdscreen/ThirdScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SecondScreenitem from './secondscreen/SecondScreenitem'
import Weather from './weather/Weather'
import HomeScreenCTitle from './components/HomeScreenCTitle'
import SignUp from './authentication/Signup'
import SignIn from './authentication/Signin'

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
                <Route exact path="/user/resister" component={SignUp}/>
                <Route exact path="/user/login" component={SignIn}/>
                
        </Router>
    )
}

export default App
