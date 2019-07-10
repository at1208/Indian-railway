import React, { Component } from 'react';
import './trainbetweenstation.css'
import axios from 'axios'




const API_KEY =  '79bbd3976272818f7fb5c0c88d2d8609';

class TrainBetweenStations extends Component {

   state = {

   boarding_station: '',
   destination_station: '',
   TrainBetweenStation: []

  }


 OnSubmission = (e) => {
 e.preventDefault();

  }

OnSubmitClick =  async (e) => {
 const boarding = this.state.boarding_station;
 const destination = this.state.destination_station;

 const URL = `http://indianrailapi.com/api/v2/TrainBetweenStation/apikey/${API_KEY}/From/${boarding}/To/${destination}`


console.log(this.state.TrainBetweenStation);
 await axios.get(URL)

       .then((data) => this.setState({ TrainBetweenStation: data }))
       .catch((err) => console.log(err))

}


render() {


  return <div className='container shadow  text-center b1'>

 <div className='container'>
 <h3 className='z3'>Train Between Station</h3>


  <form onSubmit={this.OnSubmission} >

      <input
      onChange={(e) => { this.setState({ boarding_station: e.target.value}) }}
      value={this.state.boarding_station}
      placeholder='Boarding station'
      className='z2 text-center' />

  <br />


      <input
      onChange={(e) => { this.setState({ destination_station: e.target.value}) }}
      value={this.state.destination_station}
      placeholder='Destination station'
      className='z2 text-center'  />

  <br />

  <div className='justify-content-center row'>
  <button onClick={this.OnSubmitClick} className='btn-block text-center o2' >Submit</button>
  </div>

  </form>


</div>

         </div>
}
}

export default TrainBetweenStations;
