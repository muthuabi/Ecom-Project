import React, {Component, useState,useEffect } from 'react';
import axios from 'axios';
import './css-js/admin-styles.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchUsers, putUser,deleteUser } from './adminSlice';
import MyToast, { toaster } from '../../../assets/utils/Toast';

const UsersList =(props)=> {
    const dispatch=useDispatch();
    const {users,status}=useSelector((state)=>state.admin);
    useEffect(()=>{
        dispatch(fetchUsers());
        // console.log(props);
        // axios.post('http://localhost:5000/users-list')
        //     .then(response => {
        //         if (response.status === 200)
        //         {                    
        //             console.log(response.data);
        //             dispatch(putUserData(response.data));
        //         }

        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //     })
    },[dispatch]);
    const handleDeleteClick=(uid)=>{
       axios.post('http://localhost:5000/delete-user',{UID:uid})
       .then(response=>{
        console.log(response)
        if(response.status!==200)
            throw new Error('Response not Ok');
        toaster.success('Deleted Successfully')
        dispatch(fetchUsers());
       })
       .catch(err=>{
        console.log(err);
        toaster.warning(err.message);
       })
    }
        return (
            <div className='userlist-container '>
            <MyToast />
            <div className='table-responsive'>
            
                <table className='table table-hover' style={{fontSize:'75%'}}>
                    <thead>
                        <tr><th>Name</th><th>User Name</th><th>Email</th><th>Phone</th><th>Created On</th><th>Action</th></tr>
                    </thead>
                    <tbody>
                        {
                            users.map(element => (
                                <tr key={element.UID}><td>{element.First_Name+' '+element.Last_Name}</td><td>{element.UserName}</td><td>{element.Email}</td><td>{element.Phone}</td><td>{element.Created_On}</td><td><button  type='button' className='btn btn-danger' style={{fontSize:'inherit'}} onClick={()=>{handleDeleteClick(element.UID)}} >Delete</button></td></tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
 
}
export default UsersList;