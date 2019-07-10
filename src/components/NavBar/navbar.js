import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <div className='container text-center'>
    <div className='row'>

    <Link to='live-train-status' className='col-lg  shadow text-center a1'>
       Live Train status
    </Link>

      <Link to='/pnr-status' className='col-lg shadow text-center a1 '>
      PNR status
      </Link>


      <Link to='/seat-availability' className='col-lg shadow text-center a1 '>
      Seat Availability
      </Link>

      <Link to='/train-between-stations' className='col-lg  shadow text-center a1 '>
       Train B/W Stations
      </Link>

       <Link to='/train-fair' className=' col-lg shadow text-center a1 '>
      Train Fair Enquiry
      </Link>


      <Link to='/cancelled-train' className='col-lg shadow text-center a1 '>
      Cancelled Train
      </Link>

    </div>
  </div>
}
export default NavBar;
