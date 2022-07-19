import React,{useState} from 'react'; 
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed,faPlane,faTaxi,faCar,faMosque,faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';


const  Header=({type})=> {
  const [openoptions,setOpenOptions] = useState(false)
  const [options,setOptions] = useState({
    adult:1,
    children:0,
    rooms:1
  })

  const [destination,setDestination] = useState("")
  const [opendate,setOpenDate] = useState(false)
const [date,SetDate] = useState([{
  startDate:new Date(),
  endDate:new Date(),
  key: 'selection'
}]);

const navigate = useNavigate();
const handleSeacrh = () =>{
  navigate("/hotels", {state:{destination,date,options}})
}


const handleOption =(name, operations) =>{
setOptions((prev)=>{
  return{
    ...prev, [name]:operations === "i" ? options[name] +1 : options[name] - 1,}
})}
  return (
      <div className="Header">
        <div className={type === "list"? "Container listMode": "Container"}>
        <div className ="HeaderList">
            <div className="HeaderListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="HeaderListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Planes</span>
            </div>
            <div className="HeaderListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>
            <div className="HeaderListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>taxi</span>
            </div>
            <div className="HeaderListItem">
            <FontAwesomeIcon icon={faMosque} />
            <span>Attraction</span>
            </div>
        </div>  
        {type !== "list" &&
          <>
          <h1 className="headerTitle"> a life time of discounts? Say no more</h1>
        <p> get rewarded for traveling when you take more than five flights in a year!</p>
        <button className="HeaderButton"> sign in/Register</button>
        <div className="Search">  
          <input type="text"
          placeholder="where are you going ?"
          className="headerInput"
          onChange={e=>setDestination(e.target.value)}/>
        
        <span onClick={()=>setOpenDate(!opendate)} className="searchtext"><FontAwesomeIcon icon={faCalendarDay} /> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
          {opendate && <DateRange
            editableDateInputs={true}
            onChange={item => SetDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />}
        </span>
            <div className="SearchItem">
            <span onClick={()=> setOpenOptions(!openoptions)} className="searchtext">{`${options.adult} adult | ${options.children} children | ${options.rooms} rooms`}</span>
              {openoptions && <div className='options'>
              <div className='optionItems'>
                  
                    <span className='optionText'>{`${options.adult}`}</span>
                    <div className='btncontainer'>
                  <button disabled={options.adult <=1 } className='optionCounter' onClick={()=> handleOption("adult", "d")}>-</button>
                  <span className='optionText'>1</span>
                  <button className='optionCounter'onClick={()=> handleOption("adult", "i")} >+</button>
                  </div>
                </div>
                <div className='optionItems'>
                  
                    <span className='optionText'>{`${options.children}`}</span>
                    <div className='btncontainer'>
                  <button disabled={options.children <=0 } className='optionCounter'onClick={()=> handleOption("children", "d")}>-</button>
                  <span className='optionText'>1</span>
                  <button className='optionCounter'onClick={()=> handleOption("children", "i")}>+</button>
                  </div>
                </div> 
               
                <div className='optionItems'>
                    <span className='optionText'>{`${options.rooms}`}</span>
                    <div className='btncontainer'>
                  <button disabled={options.rooms <=1 } className='optionCounter'onClick={()=> handleOption("rooms", "d")}>-</button>
                  <span className='optionText'>1</span>
                  <button className='optionCounter'onClick={()=> handleOption("rooms", "i")}>+</button>
                  </div>
                </div>
              </div>}
            </div>
            
            <div className="SearchItem">
           <button className='Searchbtn' onClick={handleSeacrh}>Search</button> 
        </div>
            </div>
            </>}
        </div>
    </div>
  )
}

export default Header