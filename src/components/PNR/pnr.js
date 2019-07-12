import React, { Component } from 'react';
import './pnr.css'
import axios from 'axios'

 const API_KEY = '3d7ea2ca4f4f756131d7ea423c70ae5a'

class Pnr extends Component {
 state = {
   PnrNo: '',
   PnrStatus: [],
 }

  OnSubmitClick = async () => {
const PNRNO = this.state.PnrNo
const URL = `http://indianrailapi.com/api/v2/PNRCheck/apikey/${API_KEY}/PNRNumber/${PNRNO}/Route/1/`

await axios.get(URL)
      .then((response) => this.setState({ PnrStatus: response }) )
      .catch(err => console.log(err))
}

  render() {
    console.log(this.state.PnrNo)
    console.log(this.state.PnrStatus)
    return <div className='container shadow text-center n1'>
        <h3 className='z3'>PNR status</h3>
      <form onSubmit={(e) => e.preventDefault() }>
        <input
        onChange={(e) => this.setState({ PnrNo: e.target.value })}
        value={this.state.PnrNo}
        placeholder='PNR No.'
        className='z2 text-center'
        />
    <div className='justify-content-center row'>
      <button className ='btn-block o2 text-center' onClick={this.OnSubmitClick}>Submit</button>
    </div>
     </form>

           </div>
  }
  }

export default Pnr;
