 import React from 'react';
 import ReactDOM from 'react-dom';
 import { BrowserRouter, Route } from 'react-router-dom'

 import App from './components/app';
 import TrainBetweenStations from './components/TrainBetweenStation/trainbetweenstation'
 import LiveTrainStatus from './components/LiveTrainStatus/livetrainstatus'
 import Pnr from './components/PNR/pnr'

 import SeatAvailability from './components/SeatAvailability/seatavailability'
 import TrainFair from './components/TrainFair/trainfair'
 


ReactDOM.render(
           <BrowserRouter>
           <div>

           <Route path='/' component={App} />
           <Route path='/live-train-status' component={LiveTrainStatus} />
           <Route path='/train-between-stations' component={TrainBetweenStations} />
           <Route path='/pnr-status' component={Pnr}/>

           <Route path='/seat-availability' component={SeatAvailability}/>
           <Route path='/train-fair' component={TrainFair}/>

           </div>

           </BrowserRouter>, document.getElementById('root'));
