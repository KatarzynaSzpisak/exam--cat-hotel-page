import React, {Component} from 'react';
import Boende from '../image/boende.jpg';
import Vakt from '../image/vakt.jpg';


export default class Info extends Component {
    render() {
        return (
            <div class="card-deck">
            <div class="card hotel">
              <div class="card-body text-center">

                <h1>Cat hotel</h1>
                <img src={Boende} width="300" height="200"/> 
                
                <div class="card-text">
                We currently offer three rooms, where guests will find new claw trees, lots of toys, the toilet and a dining area. During the day, they get to go out to a common area to be able to play and explore a bit. For those who like fresh air, we offer outdoor living in a safe and hung garden, lower walk in the harness can be possible. Daily update with pictures and information about the fur. </div>
                <br/>
                <p> Recommended for longer stays. </p> 
                <button>Reserv</button>

              </div>
            </div>

            <div class="card sitting">
            <div class="card-body text-center">

                <h1>Cat sitting</h1>
                <img src={Vakt} width="200" height="200"/> 
                 <div class="card-text">We offer the cat care service at the customer's home, where we visit furs during the day number of times according to agreement - at least 2 times. Meanwhile, we play, cuddle and take care of the cat and clean the toilet and refill food. Visit takes oven 90 minutes. </div>
       <br/>
         <p> Recommended for sensitive cats and shorter time </p>
         <button>Reserv</button>
            </div>
            </div>
            </div>

        );
    }
}
