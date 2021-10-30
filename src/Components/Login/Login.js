import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Services/userService';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import { useHistory } from 'react-router';

const Login = () =>{
    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const dispatch =  useDispatch;
    const history = useHistory()
    
    const loginHandle = (e) =>{
        e.preventDefault();
        setIsLoading(!isLoading)
        // console.log('coba login');
        const store = window.localStorage;
        login(userName, password)
        .then((response) => {
           console.log(response);
            store.setItem('user', response.user_id)
            store.setItem('success', response.success)
            setIsLoading(false)
            history.push("/Home")
            window.location.reload();
            
            })
        .catch((error)=>{
            //console.log('error login'.error)
            setIsLoading(false)
        })
    }

    return(
            <div>
                <form onSubmit={loginHandle}>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type='text' placeholder='Enter your Username here' onChange={(e)=>setuserName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your Password here' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        {
                            isLoading ? <button className='btn' disabled='true'>Loading <span className='fa fa-circle-o-notch fa-spin'></span></button> :
                            <input type='submit' value='Login'/>      
                        }
                    </div>
                </form>
            </div> 
    )
}

export default Login;