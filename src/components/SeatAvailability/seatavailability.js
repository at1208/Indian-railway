import React, { Component } from 'react';
import './seatavailability.css'

class SeatAvailabilty extends Component {
  render(){
    return <div className='container shadow text-center o1'>
        <h3 className='z3'>Check Seat Availability </h3>
  <form>
       <input
      placeholder='Train No.'
      className='z2 text-center'
       />

    <br />

       <input
      placeholder='Boarding Station'
      className='z2 text-center'
       />

    <br />

       <input
      placeholder='Destination Station'
      className='z2 text-center'
       />

       <br />

          <input
         placeholder='DD/MM/YYYY'
         className='z2 text-center'
          />

          <br />

             <input
            placeholder='1A/2A/3A/SL'
            className='z2 text-center'
             />

             <br />

                <input
               placeholder='General(GEN) Quota'
               className='z2 text-center'
                />
      <br />

      <div className='justify-content-center row'>
      <button className='btn-block o2 text-center'>Submit</button>
      </div>

    </form>
           </div>
  }
  }

export default SeatAvailabilty;
