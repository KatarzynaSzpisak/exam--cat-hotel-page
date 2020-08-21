import React, {Component} from 'react';
import aboutH from '../image/aboutH.jpg';
import aboutA from '../image/aboutA.jpg'

export default class About extends Component {
    render() {
        return (
            <div class="card-deck">
            <div class="card boende">
              <div class="card-body text-center">
                <h1>About hotel</h1>
                <img src= {aboutH} width="200" height="200"/> 
                <p class="card-text">
                We have started the summer of 2019 with the rental of guest rooms to see if there is interest. After the season, we decided to divide the room into three and have the opportunity to take more guests at the same time. in the future we want to build a hotel for many guests but to keep the feeling of home because that is our motto. It should not be a cold and emotionless place you leave your cats on holiday. Cats that will be our guests should feel loved and cared for with lots of love, it should be our a vacation home for furs. rooms filled with everything they could want, common space for play and mischief and a large patio with various activities.
               </p>
              </div>
            </div>

            <div class="card vakt">
            <div class="card-body text-center">
                <h1>About us</h1>
                <img src={aboutA} width="200" height="200"/> 
                <p class="card-text">
                We are an experienced couple with two cats and a rabbit who lives 30 minutes from Stockholm just outside Åkersberga in a terraced house.
                   We can offer your four-legged friends rooms with large windows as well as the opportunity to go out and enjoy nature several hours a day, lots of love and the opportunity to get a daily report on how your animals are doing.
                  
                   If you wish to meet before, you are welcome!
                  
                   We are located near the center of Margretelund in Åkersebrga
                  
                   We offer cat care in:  Åkersberga, Vaxholm, Sollentuna,Vallentuna, Täby  mm upp till 4:a mil från Åkersberga.
                    </p>
            </div>
            </div>
            </div>
            );
        }
    }
    