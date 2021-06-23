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
        <div>
        <Router>
            
            <Header/>
            <Route path={['/',"/:name"]} component={HeaderCarousel} exact/>
            <Route path={['/', "/:name"]} component={HomeScreenNav} exact/>
            <Route path={['/', "/:name"]} component={HomeScreenCTitle} exact/> 
            <Route path={['/', "/:name"]} component={HomeScreenCardItem} exact/> 
            <Route path={"/"} component={HomeScreenMap} exact/>
            <Route path={['/', "/:name"]} component={Footer} exact/> 
            <Route path="/:name/:title/:titleId" component={SecondScreenitem} exact/>
            <Route path="/:name/:title/:titleId/:details/:id" component={ThirdScreen} exact/>
            
            <Route path="/user/userdata" component={UserData} exact/>
            
            
           <Switch>
               <Route path="/" component={Signup} exact />
               <Route path="/user/signIn" component={Signin} exact />
               <Route path="/current/city/weather" component={Weather} exact />
           </Switch>

          
        </Router>
        </div>
    )
}

export default App
