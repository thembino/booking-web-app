import React from 'react';
import './searchitems.css';
import { useNavigate } from 'react-router-dom';
function SearchItems() {

  const navigate = useNavigate();

  const handleSearch=()=>{
    navigate("/HotelList")
  }
  return (
    <div className="SearchItems">
        <img className='img' alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogpUIY8KEVn-EvscLX9BHw8hluGKZcKL3-A&usqp=CAU"/>
        <div className="Description">
           
            <h1 className='Title'>Tower street Aprt.</h1>
            <span className='Distance'>100m from center</span>
            <span className='TaxiOp'>Free aiprot taxi 🚕 </span>
            <span className='subtitle'> Studio Aprt. with air conditioning</span>
            <span className='featurres'>
                Entire studio | 1 bathroom | 21m 1 full bed
            </span>
            <span className="cancelOp">free cancellation</span>
            <span className='cancelSubtitle'> you can cancel later, you can lock this oppotunity right now</span>
        </div>
        <div className='Details'>
          <div className='Rating'>
            <spa> Excellent</spa>
            <button>8.9</button>
          </div>
          <div className='DetailText'>
            <span className='price'>$112</span>
            <span className='Tax'>includes Tax and Fees</span>
            <button className='Checkbtn'onClick={handleSearch}> See Availablty</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItems