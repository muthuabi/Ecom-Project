import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {FaBell} from 'react-icons/fa';
const Toast = (props) => {
    // const [show,setShow]=useState(props.visible);
    return (
        <>
            <div className={`toast bg-gradient ${props.visible?'show':''}`}
            style={{
                zindex: 10000, position: 'fixed',
                bottom: '2rem',
                right: '1rem'
            }} id='my_toast'>
                <div className='toast-header'>
                    <FaBell/>
                    <strong className='me-auto mx-2' style={{color:'rgb(66, 64, 64)'}}>{props.head}</strong>
                    <button className='btn-close' data-bs-dismiss='toast'></button>
                </div>
                <div className='toast-body'>
                    <b style={{ color: 'rgb(99, 96, 96)' }} id='message'>{props.message}</b>
                </div>
            </div>

        </>

    )
}
export default Toast;