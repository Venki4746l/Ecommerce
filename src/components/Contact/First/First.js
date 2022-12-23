import React from 'react';
import './First.css'

const First = () => {
  return (
    <div className='container mt-5'>
      <div>
        <div className='firstcontent'>
          <input type="text" className="form-control" id="name" placeholder="Your Name"/><br/>
          <input type="text" className="form-control" id="name" placeholder="Your Email"/><br/>
          <input type="text" className="form-control" id="name" placeholder="Subject"/><br/>
          <input type="text" className="form-control" id="name" placeholder="Message"/><br/>
          <button type="button" className="m-2 msg">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default First;
