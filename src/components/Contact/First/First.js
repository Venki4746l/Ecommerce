import React from 'react';
import './First.css'

const First = () => {
  return (
    <div className='container mt-5'>
      <div>
        <div className='firstcontent'>
          <input type="text" className="form-control" id="name" placeholder="Your Name"/><br/>
          <input type="text" className="form-control" id="mail" placeholder="Your Email"/><br/>
          <input type="text" className="form-control" id="sub" placeholder="Subject"/><br/>
          <input type="text" className="form-control" id="mess" placeholder="Message"/><br/>
          {/* bootstrap form-control for creating typing box */}
          <button type="button" className="m-2 msg">Send Message</button>
          {/* button tag for provide clicking button */}
        </div>
      </div>
    </div>
  );
}

export default First;
