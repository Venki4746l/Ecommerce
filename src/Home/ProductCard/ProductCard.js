import React from 'react'
import './ProductCard.css'
const ProductCard = (props) => {
    const {id,imgSrc,title,price,cross_price}=props.productDetails

  return (
    <div key={id} class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-100" src={imgSrc} alt=""/>
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">{title}</h6>
                        <div class="d-flex justify-content-center">
                            <h6 className='actualprice'>${price}</h6><h6 class="text-muted ml-2"><del>${cross_price}</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/" class="btn card-features text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="/" class="btn card-features  text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
  )
}

export default ProductCard;
