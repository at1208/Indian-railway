import React from 'react';
import './cancelledtrain.css'

const CancelledTrain = () => {
  return <div className='container shadow text-center z1'>
      <h3 className='z3'>Cancelled Train</h3>
   <form>
      <input
      placeholder='DD/MM/YYYY'
      className='z2 text-center'
      />

    <div className='justify-content-center row'>
      <button  className='btn-block text-center o2'>Submit</button>
    </div>

  </form>

         </div>
}
export default CancelledTrain;
