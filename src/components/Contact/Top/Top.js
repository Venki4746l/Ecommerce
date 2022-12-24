import React from 'react';
import './Top.css'
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <div>
        <div className="container-fluid bg">
            <div className="head">
                <h1 className="font">CONTACT US</h1>
                <div className="d-inline-flex">
                    <p className="m-0"><Link to="/" className='color'>Home</Link> - Contacts</p>
                </div>
            </div>
        </div>
        <h2 className="font px-5"><span className="px-2">Contact For Any Queries</span></h2>
        {/* <h2 class="section-title px-5"><span class="px-2">Contact For Any Queries</span></h2> */}
    </div>
  );
}

export default Top;