import React,{useState,useEffect} from 'react';
import NewUserForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Toast from '../assets/utils/Toast.js';
const MyForm=(props)=>{
    const handleClose=(e)=>{
        props.setShower(false);
        // console.log(show);
    }
    const swapForm=()=>{
        if(props.form=='Login')
            props.setForm('Sign Up');
        else
            props.setForm('Login');

    }
    return(
        <div className='form-container' style={{display:props.show?'flex':'none'}} id='form-container'>
        <span onClick={handleClose} style={{position:'fixed',top:'1rem',right:'2rem',cursor:'pointer'}}>X</span>
            {
                props.form=='Login'?(<LoginForm/>):(<NewUserForm />)
            }
            <button className='btn btn-link text-decoration-none' onClick={swapForm}>{props.form=='Login'?'Sign Up':'Login Here'}</button>
       </div>
    )
}
export default MyForm;