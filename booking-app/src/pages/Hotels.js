import React from 'react'
import '../App';
import Nav from '../components/navbar';
import Header from '../components/Header'
import List from './List';

function Hotels() {
  return (
    <div>
  <Nav/>
  <Header type="list"/>
  <List/>
    </div>
  )
}

export default Hotels