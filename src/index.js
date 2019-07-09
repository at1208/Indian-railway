 import React from 'react';
 import ReactDOM from 'react-dom';
 import { BrowserRouter, Route } from 'react-router-dom'

 import App from './components/app';
 import TrainBetweenStations from './components/TrainBetweenStation'

ReactDOM.render(
           <BrowserRouter>
           <div>
           <Route path='/' component={App} />
           <Route path='/train-between-stations' component={TrainBetweenStations} />
           </div>

           </BrowserRouter>, document.getElementById('root'));
