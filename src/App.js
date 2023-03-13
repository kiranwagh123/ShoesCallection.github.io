import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Productinfo from './components/Productinfo'
import AddtoCart from './components/AddtoCart'
import { CartProvider } from 'react-use-cart'












const App = () => {
  return (
  <>
 <CartProvider>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Productinfo/:id' element={<Productinfo/>} />
    <Route path='AddtoCart' element={<AddtoCart/>}/>
  
  </Routes>
</Router>
</CartProvider>


  
  </>
  )
}

export default App