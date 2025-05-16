import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import MyToast,{toaster} from '../assets/utils/Toast';
const NewUserForm = (props) => {
    const formref=useRef(null);
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pin_message, setPinMessage] = useState('');
    // const [toast_message, setToastMessage] = useState('Registered Successfully');
    // const [toast_head, setToastHead] = useState('E-Mart');
    // const [toast_show, setToastShow] = useState(false);
    const [username,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [username_message,setUserNameMessage]=useState('');
    const [email_message,setEmailMessage]=useState('');
    const [err_flag,setErrorFlag]=useState(true);
    useEffect(()=>{
        document.addEventListener('visibilitychange',(e)=>{
            if(document.visibilityState=='visible')
                fetchUserData();
        })
    },[])
    const fetchUserData=()=>{
        setErrorFlag(true);
         axios.post('http://localhost:5000/users-username-email',{username:username,email:email})
         .then(response=>{
             console.log(response)
             if(response.data[0].UserNameCount>0)
            {
                setUserNameMessage('UserName Already Exists');
                setErrorFlag(false);
            }
            else
                setUserNameMessage('');
            if(response.data[0].EmailCount>0)
            {
                setEmailMessage('Email ID Already Exists');
                setErrorFlag(false);
            }
            else
                setEmailMessage('');
         })
         .catch(err=>{
             console.log(err);
         })
    }
    // function triggerToast() {
    //     if (!toast_show) {
    //         setToastShow(true);
    //         const timer = setTimeout(() => { setToastShow(false) }, 3000);
    //         return () => clearTimeout(timer);
    //     }
    // }
    const handlePostal = (pin) => {
        let pin_value = pin.target.value;
        setErrorFlag(true);
        if (pin_value.length >= 6) {
            axios.get(`https://api.postalpincode.in/pincode/${pin_value}`)
                .then(response => {
                    if (response.data[0].Status !== 'Error') {
                        setCountry(response.data[0].PostOffice[0].Country);
                        setDistrict(response.data[0].PostOffice[0].District);
                        setState(response.data[0].PostOffice[0].State);
                        setPinMessage('Pincode Exists');
                        setErrorFlag(true);
                    }
                    else {
                        setPinMessage(`Pincode Doesn't Exists `);
                        // setCountry('India');
                        // setState('Tamil Nadu');
                        // setDistrict('Tuticorin');
                        setErrorFlag(false);

                    }

                })
                .catch(err => {
                    console.log(err);
                    setPinMessage(err.message);
                    // setErrorFlag(false);
                        setCountry('India');
                        setState('Tamil Nadu');
                        setDistrict('Tuticorin');

                })
        }
        else {
            setCountry('');
            setState('');
            setDistrict('');
            setPinMessage('');
        }
        if (pin_value.length > 6)
            pin.target.value = pin_value.slice(0, 6);
    }
    // const handleReset=(event)=>{
    //     console.dir(event.target)
    // }
    const handleNewSubmit = (event) => {
        event.preventDefault();
       
        const form = event.target;
        console.log('Validation',event.target.validity);
        const formdata = new FormData(form);
        const jsondata = Object.fromEntries(formdata.entries());
        jsondata['Form_Valid']=err_flag;
        console.log(jsondata);
        axios.post('http://localhost:5000/create-user',jsondata)
            .then(response => {
                console.log(response);
                // setToastMessage('Registration Sucessful.');
                // triggerToast();
                toaster.success('Registration Successful');
                dispatch(fetchUsers());
                
            })
            .catch(err => {
                console.log("Error", err);
                // setToastMessage(err.message);
                // triggerToast();
                formref.current.reset();
                toaster.warn(err.response.data.message);
            })


    }

    // fetchdetails('628601');
    return (

        <div  style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <form  ref={formref} id='newuserform' className='login-signin' onSubmit={handleNewSubmit} >
        
             <MyToast />
                <h3 className='sub-head'>Register</h3>
                <div className='form-group'>
                    <label htmlFor='UserName'>User Name</label>
                    <input type='text' placeholder='User Name' name='UserName' value={username} required onChange={event=>setUserName(event.target.value)} id='UserName' onBlur={fetchUserData} className='form-control' />
                    <small style={{ display: (username_message ? 'block' : 'none') }} >{username_message}</small>
                </div>
                <div className='d-flex justify-content-between flex-column flex-md-row flex-lg-row  gap-1 gap-md-2 gap-lg-2'>
                    <div className='form-group w-100'>
                        <label htmlFor='First_Name'>First Name</label>
                        <input type='text' name='First_Name' id='First_Name' required className='form-control' />
                        <small></small>
                    </div>
                    <div className='form-group w-100'>
                        <label htmlFor='last_Name'>Last Name</label>
                        <input type='text' name='Last_Name' id='Last_Name' required className='form-control' />
                        <small></small>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <div className='d-flex gap-3 px-2 py-1'>
                        <div className='form-check'>
                            <input type='radio' required className='form-check-input' name='Gender' id='Gender_Male' value='Male' />
                            <label htmlFor='Gender_Male' className='form-check-label'>Male</label>
                        </div>
                        <div className='form-check'>
                            <input type='radio' required className='form-check-input' name='Gender' id='Gender_Female' value='Female' />
                            <label htmlFor='Gender_Female' className='form-check-label'>Female</label>
                        </div>
                        <div className='form-check'>
                            <input type='radio' required className='form-check-input' name='Gender' id='Gender_Others' value='Others' />
                            <label htmlFor='Gender_Others' className='form-check-label'>Others</label>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='Dob'>Date of Birth</label>
                    <input type='date' name='Dob' id='Dob' required className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='Phone'>Phone</label>
                    <div className='d-flex flex-row gap-1'>
                        <select name='Country_Code' id='Country_Code' className='form-control' style={{ width: 'fit-content' }}>
                            <option value='+91'>+91</option>
                            <option value='+92'>+92</option>
                            <option value='+93'>+93</option>
                            <option value='+134'>+134</option>
                        </select>
                        <input type='text' required maxLength={10} name='Phone' id='Phone' className='form-control' />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='Email'>Email</label>
                    <input name='Email' type='email' required value={email} onChange={event=>setEmail(event.target.value)} onBlur={fetchUserData} id='Email' className='form-control' />
                    <small style={{ display: (email_message ? 'block' : 'none') }} >{email_message}</small>
                </div>
                <div className='form-group'>
                    <label htmlFor='Password'>Password</label>
                    <input name='Password' required type='password' id='Password' autoComplete='on' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='Address'>Address</label>
                    <textarea className='form-control' required name='Address' id='Address'></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='City'>City / Taluk</label>
                    <input name='City' type='text' id='City' required className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='Pincode'>Postal Code</label>
                    <input name='Pincode' type='text' required onChange={handlePostal} id='Pincode' className='form-control' />
                    <small style={{ display: (pin_message ? 'block' : 'none') }} >{pin_message}</small>
                </div>
                <div className='form-group'>
                    <label htmlFor='District'>District</label>
                    <input name='District' readOnly type='text' value={district} id='District' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='State'>State</label>
                    <input name='State' type='text' readOnly value={state} id='State' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='Country'>Country</label>
                    <input name='Country' type='text' readOnly value={country} id='Country' className='form-control' />
                </div>
                <button type='submit' className='btn btn-dark my-1' name='submit' disabled={!err_flag?true:false} >Submit</button>
                {/* <a href='/sign-in' className='btn btn-link'>Go to Login</a> */}
            </form>
            </div>


    )
}
export default NewUserForm;