import React, {Component} from 'react';
import {Navbar, NavLink} from "react-bootstrap";
import Contact from "../components/Messege.js";
import AboutUs from "../components/About.js";
import Info from "../components/Befor.js";
import PriceList from "../components/Price.js";
import Reservation from "../components/Boking.js";
import Home from "../pages/Home.js";

export default class Header extends Component {
    render() {
        return (
            <div class="hero-image">
            <div class="hero-text">
              <h1>CAT HOTEL</h1>
              <p>Best place for your cats holiday!</p>
             

            <Navbar fixed="top">
            <NavLink href="/home">Home</NavLink>
            <NavLink href="/about">About</NavLink>
           <NavLink href="/before">Info</NavLink>
           <NavLink href="/boking">Reservation</NavLink>
           <NavLink href="/price">Price List</NavLink>
           <NavLink href="/contact">Contact</NavLink>
           <NavLink href="/shop">Shop</NavLink>
           
           </Navbar>
      </div>    
      </div> 
        );
    }
}
