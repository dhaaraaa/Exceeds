import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/ReactToastify.css';  // Ensure you import the CSS

import Nav from './Components/Navbar/Nav.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Arrivals from './Components/Hero/Arrivals.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Womencollections from './Components/Womencollections/Womencollections.jsx';
import Collections from './Components/Womencollections/Collections.jsx';
import Cart from './Components/Cart.jsx';
import Mencollection from './Components/Mencollections/Mencollection.jsx';
import { Cartcontext } from './Components/Context/Cartcontext.jsx';
import Signin from './Components/Sign/Signin.jsx';
import Signup from './Components/Sign/Signup.jsx';
const App = () => {
  return (
    <Cartcontext>
      <Router>
        {/* Navigation Bar */}
        <Nav />
        {/* Routing to different pages */}
        <Routes>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/" element={
            <>
              <Hero />
              <Arrivals />
              <Footer />
            </>
          } />
          <Route path="/womencollection" element={<Womencollections />} />
          <Route path="/mencollection" element={<Mencollection />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* ToastContainer for showing notifications */}
        <ToastContainer theme="dark" position="top-center" transition={Bounce}/>
      </Router>
    </Cartcontext>
  );
};

export default App;