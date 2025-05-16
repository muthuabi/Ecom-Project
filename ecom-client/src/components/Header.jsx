import {FaRegUser} from 'react-icons/fa';
import React,{useState,useEffect} from 'react';
import NewUserForm from './RegistrationForm';
import MyForm from './MyForm';
import { Link,useLocation } from 'react-router-dom';

import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header=(props)=>{
const [shower,setShower]=useState(false);
const [form_state,setForm]=useState('Login')
const [collapse,setCollapse]=useState(true);
const location=useLocation();

const handleLoginClick=(e)=>{
  setShower(true);
  setForm('Login');
}
// useEffect=(()=>{
//   window.addEventListener("scroll",(e)=>{
//     console.log(window.screenTop);
//   })
// },[])
return(
  <>
  {
(props.role=='user')?(<nav className={`navbar navbar-expand-lg fixed-top   navbar-light ${shower}`}>
    <MyForm show={shower} setShower={setShower} form={form_state} setForm={setForm}  />
{/* {
  shower==true?(<NewUserForm show={true} setShower={setShower} />):(<h1>Hello hell</h1>)
} */}
<div className="container-fluid flex-row-reverse  w-100">
<div className='nav navbar-nav d-flex flex-row gap-2 align-items-center  '>
  <li className="nav-item">
        <a className="nav-link"  href="#"><FaRegUser size={25}/></a>
  </li>
  <li className="nav-item">
        <button className='btn btn-dark' type='button' onClick={handleLoginClick}>Login</button>
  </li>
  <li>
    <span className="navbar-toggler-icon navbar-toggler" style={{border:'none',cursor:'pointer'}}  onClick={()=>{setCollapse(collapse=>!collapse)}}
 ></span>
   
  </li>
  </div>
  <a className="navbar-brand  d-block d-md-none d-lg-none " style={{fontSize:'1.5rem',fontWeight:'bold',color:'gray'}} href="#">
    E-Mart
  </a>
 
  
  <div className={`navbar-collapse max-width-fit-content ${(collapse)?'collapse':''}`} id="portfolionav">
    <ul className="navbar-nav list-group ">
      <li className="nav-item">
      {        
        (location.pathname!='/')?(<Link to='/' className='nav-link'>Home</Link>):
        (<a href='/#' className='nav-link'>Home</a>)
      }
      </li>
      <li className="nav-item">
      <Link to='/store' className='nav-link'>Store</Link>
      </li>
      {
      (location.pathname=='/')?(<><li className="nav-item">
      <a href='/#about-us' className='nav-link'>About Us</a>
      </li>
      <li className="nav-item">
        <a href='/#contact-us' className='nav-link'>Contact</a>
      </li></>):(<></>)
      }
    </ul>
  </div>
</div>
</nav>):(<nav></nav>)
}
</>
)
}
export default Header;