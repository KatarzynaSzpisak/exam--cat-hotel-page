import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Contact from "./pages/Contact";
 import PriceList from "./pages/PriceList";
 import Info from "./pages/Info";
 import NotFoundPage from "./pages/404";
import About1 from "./pages/AboutUs";
//import Shop from "./pages/Shop";
import Reservation from "./pages/Reservation";
import Header from "./components/Header";
import Home from "./pages/Home";


class App extends Component {
    render() {
        return (
            <div className="content">
                <Header/>
              
           
             <Router>
                    <Switch>
                    <Route path="/" exact component={Home} />
                          <Route path="/about"><About1/></Route> 
                          <Route path="/befor"><Info/></Route> 
                          <Route path="/booking"><Reservation/></Route> 
                          <Route path="/price"><PriceList/></Route> 
                          <Route path="/contact"><Contact/></Route> 
                // {/*        <Route path="/shop" component={Shop}/>*/}
                          <Route path="/404"><NotFoundPage/></Route> 
                          <Route exact path="/home" >
                          < Home/> </Route>
                   </Switch>
            </Router> </div>
        );
    }
}

export default App;
