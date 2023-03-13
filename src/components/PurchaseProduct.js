import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';


const PurchaseProduct = (props) => {
  
    const {addItem}= useCart();

    const cart = './assect/images/cart1.svg'
    return (
        <>
            <div className='col-md-4  purchase-product mt-5'>
                <div className="card  text-center" style={{ width: "20rem" }}>
                    <div className="card-body">
                        <h5 className='product-font'>{props.shoesname}</h5>
                        <p className='card-text-1'> <i class="fa-solid fa-indian-rupee-sign"></i> {props.price}</p>
                        <img src={props.cover}  alt="product-image" className="card-img-top"  />
                        <p className='card-text' ><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></p>
                        <Tippy content='Add To Cart'>
                        <button className="btn addcart"><img src={cart} alt='cart-image' onClick={()=> addItem(props.item)} /></button>
                        </Tippy>
                        <NavLink to={`/productinfo/${props.id}`} className='knowmore'><button>Know More </button></NavLink> 
                    </div>
                </div>

            </div>

        </>
    )
}

export default PurchaseProduct