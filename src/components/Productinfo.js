import React from 'react'
import Shoesdata from '../Productdata'
import { useParams } from 'react-router-dom'

const Productinfo = () => {

  const {id} = useParams()  

  return (
    <>
        <h1 className='text-center mt-5 '> Product Information</h1>
            {

                Shoesdata.map((cval) => {
                    if(id == cval.id){
                        return(
              <>

<div class="row g-0 bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4  knowmore-img">
    <img   src={cval.cover} class="w-100" alt="Know-More-img" />
  </div>
  <div class="col-md-6 p-4 ps-md-0">
  <h3> <span class="badge bg-warning">Sale</span></h3>
    <h2 class="mt-0">Name: {cval.shoesname}</h2>
    <h5 className='text-danger'> Price: {cval.price} INR.</h5>
    <p>incl. of taxes</p>
    <p>(Also includes all applicable duties)</p>
    <p className='card-text' ><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></p>
    <h4> <span class="badge bg-secondary">Color : {cval.color}</span></h4>
    <p>{cval.description}</p>
<button className='bg-warning' > <i class="fa-solid fa-cart-shopping text-dark"></i>  Add To Cart</button>
  </div>
</div>
            {/* <div className='container '>
             <div className='row'>
              <div className='col-md-4 mt-5 knowmore'>
               
                <img src={cval.cover}
                height={"300"} width={"300"} alt='Product-img'/>
             </div>  
             <div className='col-md-8 mt-5 knowmoreinfo'>
                <h1>Name: {cval.shoesname}</h1>
                <h3> Price: {cval.price} INR.</h3>
                <h6>{cval.description}</h6>
                <button  className=" btn-secondary">Add To Cart</button>
             </div>  
            </div>   
            </div> */}




                            </>
                        );
                    }
                })
            }


    
    </>
  )
}

export default Productinfo