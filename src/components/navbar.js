import React from 'react'; 
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const NavBar = props => {
   return (
    <React.Fragment>
    <nav className = 'navbar navbar-default navbar-fixed-top'>
     <div className = 'container-fluid'>
      <div className = 'navbar-header'>
       <button type = 'button' className = 'navbar-toggle' data-toggle =' collapse' data-target = '#navbar'>
         {/* <span className='icon-bar'></span>
         <span className='icon-bar'></span>
         <span className='icon-bar'></span>  */}
       </button>
      <a className='navbar-brand ' href='/'><img src={require('../images/dealuxeKart.png')} alt=''></img></a>
    </div>
    <div className = 'collapse navbar-collapse ' id = 'burgermenu'>
    <ul className='nav navbar-nav navbar-right'>
        <li><a href='#home'>HOME</a></li>
        <li><a href='#band'>BUYER</a></li>
        <li><a href='#tour'>SELLER</a></li>
        <li><a href='#contact'>ORDERS</a></li>
        <li><a href ='#cart'>CART</a></li>
        <li className='dropdown'>
          <a className='dropdown-toggle' data-toggle='dropdown' href='/'>MORE
            <span className='caret'></span>
          </a>
          <ul className='dropdown-menu'>
            <li><a href='#'>Best Sellers</a></li>
            <li><a href='#'>Category</a></li>
            <li><a href='#'>Choose By Colors</a></li> 
          </ul>
        </li>
        <li><a href='#'><span className='glyphicon glyphicon-search'></span></a></li>
      </ul>
    </div>
    </div>
    </nav>
    </React.Fragment>
   );


}



export default NavBar ; 
