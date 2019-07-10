import React from 'react';
import './pnr.css'

const Pnr = () => {
  return <div className='container shadow text-center n1'>
      <h3 className='z3'>PNR status</h3>
    <form>
      <input
      placeholder='PNR No.'
      className='z2 text-center'
      />
  <div className='justify-content-center row'>
    <button className ='btn-block o2 text-center'>Submit</button>
  </div>
   </form>

         </div>
}
export default Pnr;
