import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../Redux/action/userAction.js';
import { getUserDetail } from '../../Services/userService.js'

const Profile = () =>{
    const dispatch = useDispatch();
    const store = window.localStorage;
    const user_id = store.getItem('user');
    const userData = useSelector(state=>state.user.userData);


    useEffect(()=>{
        getUserDetail(user_id)
        .then((response)=>{
            console.log(response);
            dispatch(getUserData(response));
        })
        .catch((error)=>{
            //console.log('error login'.error)
        })
    },[])
    
    return(
        <>
            <Form style={{width:'100%'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" value={userData.user_name} disabled/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={userData.password} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" value={userData.first_name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" value={userData.last_name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" value={userData.phone_number}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userData.email}/>
                </Form.Group>
              
            </Form>
        </>
    )
}

export default Profile