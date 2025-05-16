import React, { useState,useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
const MyToast = (props) => {
    return (
        <>
         <ToastContainer style={{zIndex:'100000'}}/>  
        </>

    )
}
export default MyToast;
export const toaster=toast;