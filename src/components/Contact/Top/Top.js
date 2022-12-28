import React from 'react';
import './Top.css'

const Top = () => {
  return (
    <div>
        <div className="container-fluid bg">
          {/* container-fluid will occupy 100% width display & for bg wrote css for background color*/}
            <div className="head">
                <h1 className="font">CONTACT US</h1>
                <div className="d-inline-flex">
                    <p className="m-0"><a href="..." className='color'>Home</a> - Contacts</p>
                </div>
            </div>
        </div>
        <h2 className="font px-5"><span className="px-2">Contact For Any Queries</span></h2>
    </div>
  );
}

export default Top;