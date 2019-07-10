import React from 'react';
import './trainfair.css'

const TrainFair = () => {
  return <div className='container shadow text-center  x1'>
      <h3 className='z3'>Train Fair</h3>

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
        placeholder='GEN/CK'
        className='z2 text-center'
         />

         <br />
      <div className='justify-content-center row'>
         <button className='btn-block text-center o2'>Submit</button>
      </div>
</form>
         </div>
}
export default TrainFair;
