import React from 'react';
import conference from '../../assets/mamaguru_conference.jpeg'
import logo_horizontal from '../../assets/logo_horizontal.png'
import './Offer.css'
import { Container } from 'react-bootstrap';

const Offer = ()=>{
    return(
        <Container>
        <div style={{marginTop:'100px'}}>
            <div className='card mb-5' style={{width:'350px', margin:'auto'}}>
                <div className='card-body' style={{textAlign:'center'}}>
                    <h4>Mamaguru Conference</h4>
                    <h5>17 Aug 2021 to 24 Aug 2021</h5>
                    <a href='https://www.mamaguru.co/conference'>More Info about conference</a>
                </div >
                <img alt='img' src={conference} style={{height:'100px', margin:'auto'}}/>
            </div>
            <div className='card' style={{width:'350px', margin:'auto'}}>
                <div className='card-body' style={{textAlign:'center'}}>
                    <h4>TIGA GENERASI</h4>
                    <h5>ONE STOP PSYCHOLOGICAL<br/> SERVICES FOR EVERYONE</h5>
                    <div className='button-border'>Contact for Booking</div>
                </div>
                <img alt='img' src={logo_horizontal} style={{height:'100px', margin:'auto'}}/>

            </div>
        </div>
        </Container>
    )
}

export default Offer;