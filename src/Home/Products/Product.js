import "./product.css";

const data = [
  {
  id:1, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-1.jpg",
  title:"men's Dresses"
},
{
  id:2, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-2.jpg",
  title:"Women's Dresses"
},
{
  id:3, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-3.jpg",
  title:"Baby's Dresses"
},
{
  id:4, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-4.jpg",
  title:"Accessories"
},
{
  id:5, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-5.jpg",
  title:"Bags"
},
{
  id:6, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-6.jpg",
  title:"Shoes"
},
]

const Product = () => {
  
    return (  
      <>
      <div className='productcardssection'>
        {data.map((product)=> {
          return( 
            <div key={product.id} className="productSection-card" >
              <div className="productSection-container"> 
                <p> 15 Products</p>
              </div>
          <div className="image"><img src={product.imgSrc} className="card-img-top" alt={product.title} /></div> 
          <div className="card-body">
            <h5 className="card-title"> {product.title}</h5>
          </div>
        </div>
          )
          
        })}
        </div>
      </>
    )
  }
export default Product 
