import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <div className='container'>
    <div className='row'>
      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='live-train-status' className='a'> Live Train status </Link>
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/pnr-status' className='a'>PNR status</Link>
      </button>



      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/seat-availability' className='a'>Seat Availability</Link>
      </button>

      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/train-between-stations' className='a'> Train Between Stations </Link>
      </button>

      <button className='col-sm  btn btn-sm shadow text-center a1'>
      <Link to='/train-fair' className='a'>Train Fair Enquiry</Link>
      </button>



      <button className='col-sm btn btn-sm shadow text-center a1'>
      <Link to='/cancelled-train' className='a'>Cancelled Train</Link>
      </button>

    </div>
  </div>
}
export default NavBar;
