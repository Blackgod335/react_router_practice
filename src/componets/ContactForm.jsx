import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Name'/>
            <br />
            <input type="email" name="" id="" placeholder='Email'/>
            <br />
            <textarea name="message" id=""></textarea>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm