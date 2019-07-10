import React from 'react';
import './livetrainstatus.css'

const LiveTrainStatus = () => {
  return <div className='container text-center'>
        <h3> Live Train Status </h3>

        <input
       placeholder='Train No.'
        />

    <br />
        <input
        placeholder='DD/MM/YYYY'
        />

        </div>
}
export default LiveTrainStatus;
