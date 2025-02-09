import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MyToast,{toaster} from '../assets/utils/Toast';
const LoginForm=()=>{
    // const [toast_message, setToastMessage] = useState('Logged In Successfully');
    // const [toast_head, setToastHead] = useState('E-Mart');
    // const [toast_show, setToastShow] = useState(false);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    // function triggerToast() {
    //     if (!toast_show) {
    //         setToastShow(true);
    //         const timer = setTimeout(() => { setToastShow(false) }, 3000);
    //         return () => clearTimeout(timer);
    //     }
    // }
    const clearFormDate=()=>{
        setUsername('');
        setPassword('')
    }
    const handleLoginSubmit=(event)=>{
        event.preventDefault();
        const values={Email:username,Password:password}
        axios.post('http://localhost:5000/validate-user',values)
        .then(response=>{
            console.log(response);
            if(response.status==200)
            {
               
                toaster.success('Credentials Validated')
                clearFormDate();
            }
            else 
                throw new Error('Status Not Ok')
        })
        .catch(err=>{
            console.log(err);
            toaster.warn(err.message);
            clearFormDate();
        })
    }
    return(
    <div  style={{width:'100%',display:'flex',justifyContent:'center'}}>
       <form id='Loginform' className='login-signin' onSubmit={handleLoginSubmit} >
        <MyToast/>
           <h3 className='sub-head'>Login</h3>
           <div className='form-group'>
               <label htmlFor='UserName'>Email</label>
               <input type='email' name='UserName' value={username} required autoComplete='on' onChange={event=>setUsername(event.target.value)} id='UserName' className='form-control' />
           </div>
           <div className='form-group'>
               <label htmlFor='Password'>Password</label>
               <input type='password' name='Password' autoComplete='on' required value={password} onChange={event=>setPassword(event.target.value)} id='Password' className='form-control' />
           </div>
           <button type='submit' className='btn btn-dark my-2' name='login-submit' id='login-submit'>Login</button>
           {/* <a href='/sign-up' className='btn btn-link'>Register Here</a> */}
        </form>
    </div>
 
  
    )
}

export default LoginForm;