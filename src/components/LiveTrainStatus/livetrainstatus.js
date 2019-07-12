import React, { Component } from 'react';
import './livetrainstatus.css'
import axios from 'axios'



const API_KEY =  '79bbd3976272818f7fb5c0c88d2d8609';

class LiveTrainStatus extends Component {
  state = {
    TrainNo : '',
    date: '',
    TrainLiveStatus: [],
    currentstation: [],
    TrainRoute: []

  }


  OnSubmission = (e) => {
  e.preventDefault();
}


OnSubmitClick = async () => {
  const TrainNo = this.state.TrainNo;
  const date = this.state.date;

  const URL = `http://indianrailapi.com/api/v2/livetrainstatus/apikey/${API_KEY}/trainnumber/${TrainNo}/date/${date}`

  await axios.get(URL)
        .then((response) => this.setState({ TrainLiveStatus: response.data }))
        .catch((err) => console.log(err))

        const detail =  await Object.values(this.state.TrainLiveStatus.CurrentStation)
        this.setState({ currentstation: detail })

   const Route =  this.state.TrainLiveStatus.TrainRoute
   this.setState({ TrainRoute: Route })
   console.log(this.state.TrainRoute)

}

 //  Route = () => {
 //    const Routes = this.state.TrainRoute.map((way) =>{
 //
 //      return <div>
 //            </div>
 //
 //    })
 // console.log(Routes)
 //       return Routes
 //
 //  }

  LiveStatus = () => {
   const station = this.state.currentstation.length
    if(station){
      return <div className='container shadow m3'>
            <h1 className='m5 text-center'>Current Station</h1>
            <h1 className='m2 shadow'><span className='k6'>Day</span>  <span className='float-right m4'>{this.state.currentstation[3]}</span> </h1>
            <h1 className='m2 shadow'><span className='k6'>Train Number</span> <span className='float-right m4'>{this.state.TrainLiveStatus.TrainNumber}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Start Date</span> <span className='float-right m4'>{this.state.TrainLiveStatus.StartDate}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Station Name</span> <span className='float-right m4'>{this.state.currentstation[1]}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Station code</span> <span className='float-right m4'>{this.state.currentstation[2]}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Actual Arrival</span><span className='float-right m4'>{this.state.currentstation[4]}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Actual Departure</span> <span className='float-right m4'>{this.state.currentstation[7]}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Delay In Arrival</span> <span className='float-right m4'>{this.state.currentstation[6]}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Delay In Departure</span>  <span className='float-right m4'>{this.state.currentstation[9]}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Schedule Arrival</span><span className='float-right m4'>{this.state.currentstation[5]}</span></h1>
            <h1 className='m2 shadow'><span className='k6'>Schedule Departure</span> <span className='float-right m4'>{this.state.currentstation[6]}</span></h1>

         </div>
    }

}




  render(){


// console.log(this.state.TrainLiveStatus.TrainRoute)






    return <div>
    <div className='container shadow text-center m1'>
          <h3 className='z3'> Live Train Status </h3>

     <form onSubmit={this.OnSubmission}>
          <input
          onChange={ (e) =>  this.setState({ TrainNo: e.target.value}) }

          placeholder='Train No.'
          className='z2 text-center'

          />

      <br />
          <input
          onChange={(e) => this.setState({ date: e.target.value}) }

          placeholder='YYYY/MM/DD'
          className='z2 text-center'
          />
      <br />
    <div className='justify-content-center row'>
      <button className ='btn-block o2 text-center' onClick={this.OnSubmitClick}>Submit</button>
    </div>
    </form>
          </div>

               <div className='container'>
          {this.LiveStatus()}
 
               </div>

    </div>

  }
  }

export default LiveTrainStatus;
