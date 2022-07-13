import React from 'react';
import Nav from '../components/navbar';
import Header from '../components/Header';
import Feature from '../components/Features/Feature';
import './homePage.css'
import Property from './propertyList';
import FeaturedProp from './featuredProp';
import MailList from './MailList';
function homePage() {
  return (
    <div style={{paddingBottom:'10px'}}>
        <Nav/>
        <Header/>
        <div className='PageContainer'>
            <h1 className='headerTitle'>Browse property type</h1>
        <Feature/>
        <h1 className='headerTitle'>featured properties 🏨  </h1>
            <Property/>
             <h1 className='headerTitle'>home guest love 💗 </h1>
            <FeaturedProp/>
           
            <MailList/>
        </div>
        </div>
  )
}

export default homePage