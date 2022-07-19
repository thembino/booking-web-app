import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns'
import './List.css';
import { DateRange } from 'react-date-range';
import SearchItems from '../components/SearchItems';


function List() {

    const location = useLocation()
   const [destination,setDestination] = useState(location.state.destination)
   const [opendate,setOpenDate] = useState(false)
   const [date,setDate] = useState(location.state.date)
   const [options,setOptions] = useState(location.state.options)
  return (
    <div>
        <div className='listContainer'>
        <div className='listWrapper'>
        <div className='listSearch'>
          <h1 className='title'>Search</h1>
          <div className='listItem'>
            <label> Destination</label>
            <input placeholder={destination} type="text"/>
          </div>
          <div className='listItem'>
            <label> Check-in date</label>
            
            <span onClick={()=> setOpenDate(!opendate)}> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
           {opendate &&(<DateRange onCange={items=>setDate([items.selection])}  
           ranges={date}/>)}
          </div> 
           <div className='lsItem'>
            <label>Options</label>
            <div className='lsOptions'>
            <div className='lsOptionItem'>
                <span className='lsOptionText'>Min price <small>per night</small></span>
                <input type="number" min={1} className="isOptionOutput"/>
            </div>
            <div className='lsOptionItem'>
                <span className='lsOptionText'>Max price <small>per night</small></span>
                <input type="number" min={1} className="isOptionOutput"/>
            </div>
            <div className='lsOptionItem'>
                <span className='lsOptionText'>Adult </span>
                <input type="number" min={1} className="isOptionOutput" placeholder={options.adult}/>
            </div>
            <div className='lsOptionItem'>
                <span className='lsOptionText'>Children</span>
                <input type="number" min={0} className="isOptionOutput" placeholder={options.children}/>
                
            </div>
            <div className='lsOptionItem'>
                <span className='lsOptionText'>Room</span>
                <input type="number" min={1} className="isOptionOutput" placeholder={options.rooms}/>
            </div>
        </div>
        </div>
        <button>Search</button>
        </div>
        <div className='listResult'>
          <SearchItems/>
          <SearchItems/>
          <SearchItems/>
          <SearchItems/>
          <SearchItems/>
          <SearchItems/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default List