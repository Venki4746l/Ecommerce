import React from 'react';
import './Top.css'

const Top = () => {
  return (
    <div>
        <div className="container-fluid bg">
            <div className="head">
                <h1 className="font">CONTACT US</h1>
                <div className="d-inline-flex">
                    <p className="m-0"><a href="..." className='color'>Home</a> - Contacts</p>
                </div>
            </div>
        </div>
        <h2 className="font px-5"><span className="px-2">Contact For Any Queries</span></h2>
        {/* <h2 class="section-title px-5"><span class="px-2">Contact For Any Queries</span></h2> */}
    </div>
  );
}

export default Top;