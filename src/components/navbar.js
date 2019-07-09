import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <div className='container'>
    <div className='row'>
      <button className='col-sm btn btn-sm shadow text-center a1'>
      Live Train status
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      PNR status
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      Train Route
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      Seat Availability
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/train-between-stations'> Train Between Stations </Link>
      </button>

      <button className='col-sm  btn btn-sm shadow text-center a1'>
      Train Fair Enquiry
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      Train Arrival
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      Cancelled Train
      </button>

    </div>
  </div>
}
export default NavBar;
