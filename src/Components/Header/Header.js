import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo_full.png';
import { report } from '../../Services/reportService';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Report from '../Report/Report';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Header = () =>{
    const history = useHistory();
    const [list, setList] = useState('')
    const store = window.localStorage;
    const success = JSON.parse(store.getItem("success"));

    const handleLogout=()=>{
        const store = window.localStorage;
        store.clear("");
        history.push("/")
        window.location.reload();
        
    }
    useEffect(()=>{
        
    },[success])
    return(
        <>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='logo'>
                            <img src={logo} alt='logo'/>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto justify-content-end">
                        {
                            success ? 
                            <>
                                <Nav.Link href='/report' onClick={()=>history.push("/report")}>Reports</Nav.Link>
                                <Nav.Link href='/offer' onClick={()=>history.push("/offer")}>Offer</Nav.Link>
                                <Nav.Link  href='/payment' onClick={()=>history.push("/payment")}>Payment</Nav.Link>
                                <Nav.Link  href='/setting' onClick={()=>history.push("/setting")}>Settings</Nav.Link>
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </> :
                            <>
                                <Nav.Link href="#link">Login</Nav.Link>
                            </>
                        }
                    </Nav>  
                    </Navbar.Collapse>  
                </Container>
            </Navbar>
        </>
    )
}

export default Header;