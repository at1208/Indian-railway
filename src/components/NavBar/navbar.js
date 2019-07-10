import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <div className='container'>
    <div className='row'>
      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='live-train-status'> Live Train status </Link>
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/pnr-status'>PNR status</Link>
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/train-route'>Train Route</Link>
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/seat-availability'>Seat Availability</Link>
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/train-between-stations'> Train Between Stations </Link>
      </button>

      <button className='col-sm  btn btn-sm shadow text-center a1'>
      <Link to='/train-fair'>Train Fair Enquiry</Link>
      </button>

     

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/cancelled-train'>Cancelled Train</Link>
      </button>

    </div>
  </div>
}
export default NavBar;
