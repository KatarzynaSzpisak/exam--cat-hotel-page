import React, {Component} from 'react';
import {Navbar, NavLink} from "react-bootstrap";

export default class Price extends Component {
    render() {
        return (
          <div class="card-deck">
          <div class="card boende">
            <div class="card-body text-center">

              <h3>Hotel</h3>
               <h6>One cat - low season</h6>
              <p>200 kr for a day</p>
              <p>1200 kr for a week</p>
      
              <h6>One cat - high season </h6> 
              <h8> (school braicks and holidays) </h8>
              <p>250 kr for a day</p>
              <p>1500 kr for a week</p>
      
              <h6>Two cats in the same room (low season)</h6>
              <p>300 kr for a day</p>
              <p>1800 kr for a week</p>
      
              <h6>Two cats in the same room - high season (schoolbraicks holidays)</h6>
              <p>350 kr for a day</p>
              <p>2100 kr for a week</p>
          
            <button type="submit">Reserv</button>
            </div>
          </div>
      
        
          <div class="card vakt">
            <div class="card-body text-center">
              <h3>Cat sitting</h3>
              <h6>Low season</h6>
              <p class="card-text">250 kr for a visit</p>
           <p>Travel to and from 25 sek per mile</p>
      
           <h6>Higt season</h6>
              <p>300 kr for a visit</p>
           <p>Travel to and from 30 kr per mile</p>
           
             
            <button type="submit">Reserv</button>
      
            </div>
          </div>
          
       
         <div class="card vakt">
          <div class="card-body text-center">
            <h3>Pick-up and drop-off</h3>
            <h6>Milage</h6>
            <p> 25 kr per mile + possible extra costs such as parking and congestion tax </p>
              
               <h3>SPA</h3>
               <h6>Bath and fur care</h6>
                  <p>200 kr short fur</p>
                  <p>300 kr long fur</p>
      
                <h6>Nail clipping</h6>
                  <p>200 kr</p>      
         </div>
         </div>
            </div>
            
        );
    }
}