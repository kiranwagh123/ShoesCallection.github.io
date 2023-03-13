import React from 'react'
import 'aos/dist/aos.css';
// import Tippy from '@tippyjs/react';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Shoesdata from '../Productdata';
import PurchaseProduct from './PurchaseProduct';

const Home = () => {

  


  const homepage = './assect/images/slide1.jpg'
  const about1 = './assect/images/about-1.PNG'
  const about2 = './assect/images/about-2.jpg'

  return (
    <>
  


      {/* Crousel Start */}

    
      <h1 className='text-center mt-3 nikeheading'   >Nike Shoes </h1> 
      <div id="carouselExampleSlidesOnly" class="container-fluid mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homepage} class="d-block" alt="..." />
          </div>
        </div>
      </div>
      

      {/* Crousel End */}


      {/* just do it */}


      <div className='just text-center mt-5'>
        <span className='text-center'> JUST DO IT </span>
      </div>

      <div className='para'>
        <p>
          Nike has been your companion in happiness, both big and small, for
          over 50 years. Our roots are firmly grounded in India and with its
          people.
        </p>
      </div>

      {/* just do it */}




      {/* latest design */}

      <h1 className='latest text-center'>  Latest Designs    </h1>
      <div className='container mt-5 ' >
        <div className='row'>
          <div className='col-md-3 latestproduct'>
            <div className="latestcard" style={{ width: "18rem" }} data-aos="zoom-in">
              <img src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/705c072d-0c30-49b3-81ce-42e95b118e31/pegasus-39-road-running-shoes-kmZSD6.png'} class="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-text latest-font">Nike Pegasus 39 </h5>
                <h6 className="price text-center"><i class="fa-solid fa-indian-rupee-sign"></i> 10495</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3 latestproduct'>
            <div className="latestcard" style={{ width: "18rem" }} data-aos="zoom-in">
              <img src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce27aca7-c615-43dc-aa9a-e7e96d8273fa/free-run-5-road-running-shoes-m8L9mr.png'} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-text latest-font">Nike Free Run 5.0</h5>
                <h6 className="price text-center"><i class="fa-solid fa-indian-rupee-sign"></i> 7047</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3 latestproduct'>
            <div className="latestcard" style={{ width: "18rem" }} data-aos="zoom-in">
              <img src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b1d3cf2e-0dca-4f6d-97ff-21006c346e8e/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png'} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-text latest-font">Air Jordan 1 Retro High </h5>
                <h6 className="price text-center"><i class="fa-solid fa-indian-rupee-sign"></i> 16995</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3 latestproduct'>
            <div className="latestcard" style={{ width: "18rem" }} data-aos="zoom-in">
              <img src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e7a5ba73-4df3-4067-b49f-29b54bb07ca1/pegasus-flyease-easy-on-off-road-running-shoes-RlnnC7.png'} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-text latest-font">Nike Pegasus FlyEase </h5>
                <h6 className="price text-center"><i class="fa-solid fa-indian-rupee-sign"></i> 10890</h6>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* latest design */}


      {/* Purchase Product */}
      

      <h1 className='purchase text-center mt-5'>  Purchase Products  </h1>
      <div className='container'>
        <div className='row'>
          {

            Shoesdata.map((cval) => {
              return (
                <>
                <PurchaseProduct
                id        = {cval.id}
                shoesname = {cval.shoesname}
                price = {cval.price}
                cover = {cval.cover}
                item = {cval}
                
                  />
                 
                </>
                )
                })
            }
        </div>
      </div>
    {/* Purchase Product */}

      {/* About Me */}

      <h1 className='About-text  text-center mt-5'> About Me </h1>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 about-me'>
            <img src={about1} class="w-100" alt="..." />
          </div>
          <div className='col-md-6 mt-5'>
            <h6 className="mt-0 text-center our-mission" >OUR MISSION</h6>
            <p className='about-para text-center'>"BRING INSPIRATION AND INNOVATION TO <br /> EVERY ATHLETE* IN THE WORLD" </p>

          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-md-6 mt-5 '>
          <h6 className="mt-0 text-center About-nike">About Nike</h6>
          <p className='about-para text-center about-nikepara'>Our mission is what drives us to do everything possible to expand human potential. We do that by creating
              <br />groundbreaking sport innovations, by making our products more sustainably, by building a creative and <br />
              diverse global team and by making a positive impact in communities where we live and work. Based in <br />
              Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands. </p>

          </div>
          <div className='col-md-6 mt-5 about-me'>
            <img src={about2} class="w-100" alt="..." />
          </div>
        </div>
      </div>

      {/* About Me */}

      {/* footer */}
      <hr className='abc'></hr>
      <footer className="py-5 px-lg-5 ">
        <div className="container">
          <div className="row gy-4 justify-content-between">

            <div className="col-auto">
              <p className="mg-0 devloper-name"> <span className='name'>Developer:</span> Kiran Wagh</p>
            </div>
            <div className="col-auto">
              <p className="mg-0 ">&copy;Copyright 2023 Nike, Inc. All Rights Reserved</p>
            </div>

            <div class="col-auto">
              <div class="social-icons">
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

          </div>

        </div>

      </footer>

      {/* footer */}





    </>
  )
}

export default Home




