import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong,faLeftLong,faCancel } from '@fortawesome/free-solid-svg-icons';
import React,{useState}  from'react'
import Header from '../components/Header'
import Navbar from '../components/navbar'
import MailList from './MailList'
import './Hotel.css';


function HotelList() {

    // const [picture,SetPicture]  = useState(0);
    // const [open,SetOpen]  = useState(false);
    const photos=[
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            },
            {
            src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/HOTEL-VILLA-ATHENA-SICILY.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/HOTEL-VILLA-ATHENA-SICILY.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            }, {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            },
            {
            src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/HOTEL-VILLA-ATHENA-SICILY.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/HOTEL-VILLA-ATHENA-SICILY.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            },
            {
                src:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/03/THERASIA-RESORT-SEA-SPA-VULCANO.jpg?ssl=1"
            },
    ]

    // const handleOpen= (i) =>{
    //     SetPicture(i);
    //     SetOpen(true);
    // }
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className='HotelContainer'> 
        {/* {open &&<div className='slider'>
            <FontAwesomeIcon icon={faLeftLong} />
            <div className='slideWrapper'>
                <img src={photos[picture].src} alt=''className='sliderImage'/>
            </div>
            <FontAwesomeIcon icon={faRightLong} /> 
            <FontAwesomeIcon icon={faCancel} />
            </div>} */}
            <button className='booking'>book now</button>
            <div className='Wrapper'> 
           
                <h1 className='title'>Grand Hotel</h1>
                <div className='hotelAddress'>
                    <FontAwesomeIcon icon=''/>
                    <span>Elton strt 125 new york</span>
                </div>
                <div className='hotelDistance'>
                    <span>Excellent location -500 m from city center</span>
                </div>
                <div className='hotelPrice'>
                    <span>book a stay over and get a free all expenses payed airport taxi</span>
                    <div className='HotelImg'>
                        {photos.map(photo=>(
                            <div className='ImgWrapper'>
                                <img  src={photo.src} alt='' className='images'/>
                            </div>
                        ))}
                    </div>
                    <div className='Hoteldetails'>
                        <div className='textArea'>
                            <h1 className='hoteltitle'> stay in sicily</h1>
                            <p className='hotelDesc'>
                            Monteverde Country Lodge is a quiet, comfortable hotel located near the Ecological Sanctuary and the Monteverde Butterfly Gardens in an area called Cerro Plano, an ideal location 
                            half way between the Monteverde Cloud Forest reserve and the main village of the Monteverde area (Santa Elena), in close proximity to several restaurants and activities.
                             All rooms have private bathrooms with hot water. 
                            </p>
                        </div>
                        <div className='priceList'>
                            <h1> perfect for a 10-night stay! </h1>
                            <span>comfortable hotel located near the Ecological Sanctuary and the Monteverde Butterfly Gardens in an area called Cerro Plano</span>
                            <h2>
                                <b>$945</b>(9 nights)
                            </h2>
                            <button>Reserve or book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MailList/>
    </div>
  )
}

export default HotelList