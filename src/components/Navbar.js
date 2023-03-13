import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // const logo = "./assect/images/nike1.svg"
  return (
    <>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img className='logo ' src={logo} height={'50rem'} />
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <NavLink to={'/'} className="nav-link active me-2" aria-current="page">Home</NavLink>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <NavLink to={'/AddtoCart'} className="nav-link active me-2" aria-current="page"> <i class="fa-solid fa-cart-shopping text-dark fa-solid fa-basketball fa-bounce" ></i>  Cart </NavLink>
          </li>
       
      </ul>
    </div>
  </div>
</nav> */}


        {/* new navbar  */}

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><img src='https://pngimg.com/uploads/nike/nike_PNG11.png'height={"30px"}width={"90px"} alt='Image Logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  m-auto">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <NavLink to={'/'} className="nav-link active me-2" aria-current="page">Home</NavLink>

        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Features</a> */}
          <NavLink to={'/AddtoCart'} className="nav-link active me-2" aria-current="page"> <i class="fa-solid fa-cart-shopping text-dark fa-solid fa-basketball fa-bounce" ></i>  Cart </NavLink>

        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar