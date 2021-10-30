import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Profile from './Profile.js'


const Setting = () =>{
    return(
        <div>
            <h3 className='mt-3' style={{textAlign:'center'}}>My Information</h3>
            <Tabs defaultActiveKey="my-info"  className="mb-3">
                <Tab eventKey="my-info" title="My Information">
                    <Profile />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Setting