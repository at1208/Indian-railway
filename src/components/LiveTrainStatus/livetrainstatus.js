import React from 'react';
import './livetrainstatus.css'

const LiveTrainStatus = () => {
  return <div className='container shadow text-center m1'>
        <h3 className='z3'> Live Train Status </h3>
   <form>
        <input
       placeholder='Train No.'
        className='z2 text-center'
        />

    <br />
        <input
        placeholder='DD/MM/YYYY'
        className='z2 text-center'
        />
    <br />
  <div className='justify-content-center row'>
    <button className ='btn-block o2 text-center'>Submit</button>
  </div>
  </form>
        </div>
}
export default LiveTrainStatus;
