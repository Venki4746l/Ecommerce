// bala

import React from 'react'
import "./Card.css"

function Cards() {
  return (
    <div className="offer-card-container pt-5">
        <div className="row rowww">
            <div className="col-md-6 pb-4">
                <div className="offer-card-bg text-center text-md-right mb-2 p-5">
                    <img className='offer-card-img' src="https://technext.github.io/eshopper/img/offer-1.png" alt="girl-pic-1"/>
                    <div className="z-index" >
                        <h5 className="offer-card-offer mb-3">20% OFF THE ALL ORDER</h5>
                        <h1 className="offer-card-heading">Spring Collection</h1>
                        <a href="@" className="offer-card-button">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pb-4">
                <div className="offer-card-bg text-center text-md-left mb-2 p-5">
                    <img className='offer-card-img' src="https://technext.github.io/eshopper/img/offer-2.png" alt="girl-pic-2"/>
                    <div className="z-index" >
                        <h5 className="offer-card-offer mb-3">20% OFF THE ALL ORDER</h5>
                        <h1 className="offer-card-heading">Winter Collection</h1>
                        <a href="@" className="offer-card-button">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Cards;
