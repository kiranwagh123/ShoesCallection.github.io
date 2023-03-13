import React from 'react'
import { useCart } from 'react-use-cart'


const AddtoCart = () => {

  const {items,removeItem,updateItemQuantity,totalItems,totalUniqueItems,cartTotal}= useCart();

  return (
    <>
    <h1 className='text-center mt-5 '>Cart</h1>
    <div className='container aaa'>
      <table className='table table-stripe hover'>
        <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Name</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
        </tr>
        {
        items.map((cval)=>{

          return(
         
        <tr>

          <td>{cval.id}</td>
          <td><img src={cval.cover} height={'100'} width={'100'} alt=''/></td>
          <td>{cval.shoesname}</td>
          <td>{cval.color}</td>
          <td>{cval.price}</td>
          <td><button onClick={()=> updateItemQuantity (cval.id,cval.quantity + 1) }>+</button></td>
          <td className='text-center'>{cval.quantity}</td>
          <td><button onClick={()=>updateItemQuantity(cval.id,cval.quantity -1)}>-</button></td>
          <td><button className='btn btn-danger text-dark' onClick={()=>removeItem(cval.id)}>Remove</button></td>
          
        </tr>

          );

        })
        }
      <h3>Total = {cartTotal}</h3>
      </table>
    </div>
    
    </>
  )
}

export default AddtoCart