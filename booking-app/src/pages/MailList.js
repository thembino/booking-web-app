import React from 'react'
import './mail.css';

function MailList() {
  return (
    <div className='mail '>
        <h1 className='mailTitle'> Save time, save Money! 💰 </h1>
        <span className='decsription'>sign up with us and we'll send th best deals to you</span>
        <div className='mailInput'>
            <input  type="text" placeholder="enter your Email"/>
            <button className='SubBtn'>subscribe 😇 </button>
        </div>
    </div>
  )
}

export default MailList