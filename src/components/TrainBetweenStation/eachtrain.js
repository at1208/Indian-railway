
import React from 'react'
import './eachtrain.css';

const EachTrain = (props) => {
  console.log(props)
  return <div className='container-fluid card shadow k1  '>

 <div className='container  row text-center justify-content-center'>
       <div className='k5 col-lg-2 '><h1 className='k2 k3'><span className='k6'>Train no</span> : {props.train[0]}</h1> </div>
       <div className='k5 col-lg-2  '><h1 className='k2 k3'><span className='k6'>Train Name</span>: {props.train[1]}</h1></div>
      <div className=' k5 col-lg-2  '><h1 className='k2 k3'><span className='k6'>Source</span>: {props.train[2]}</h1></div>
      <div className='  k5 col-lg-2   '><h1 className='k2 k3'><span className='k6'>Destination</span>: {props.train[3]}</h1></div>
       <div className=' k5 col-lg-1  '><h1 className='k2 k4'><span className='k6'>Arrival Time</span>: {props.train[4]}</h1></div>
       <div className=' k5 col-lg-1 '><h1 className='k2 k4'><span className='k6'>Departure Time</span>: {props.train[5]}</h1></div>
      <div className=' k5 col-lg-1   '><h1 className='k2 k4'><span className='k6'>Type </span>: {props.train[6]}</h1></div>
       <div className='k5 col-lg-1  '><h1 className='k2 k4'><span className='k6'>Travel Time</span>: {props.train[7]}</h1></div>

</div>

    </div>
}
export default EachTrain;
