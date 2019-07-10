import React from 'react';
import './seatavailability.css'

const SeatAvailabilty = () => {
  return <div className='container text-center'>
      <h3>Check Seat Availability </h3>

     <input
    placeholder='Train No.'
     />

  <br />

     <input
    placeholder='Boarding Station'
     />

  <br />

     <input
    placeholder='Destination Station'
     />

     <br />

        <input
       placeholder='DD/MM/YYYY'
        />

        <br />

           <input
          placeholder='1A/2A/3A/SL'
           />

           <br />

              <input
             placeholder='General(GEN) Quota'
              />

         </div>
}
export default SeatAvailabilty;
