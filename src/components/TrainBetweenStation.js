import React from 'react';
import './TrainBetweenStation.css'

const TrainBetweenStations = () => {
  return <div className='container text-center b1'>

 <div className='container'>
 <h3>Train Between Station</h3>
  <form>
      <div>
      <input type="text" placeholder='Boarding station' value=""/>
      </div>

      <div>
      <input type="text" placeholder='Destination station' value="" />
      </div>

   <button> Submit</button>

  </form>
</div>

         </div>
}
export default TrainBetweenStations;
