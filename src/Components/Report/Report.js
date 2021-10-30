import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReport } from '../../Redux/action/reportAction';
import { report } from '../../Services/reportService';
import './Report.css'


const Reports = () => {
    const dispatch = useDispatch();
    const dataReport = useSelector(state=>state.report.dataReport)

    useEffect(()=>{
        report()
        .then((response) => {
            console.log(response);
            dispatch(setReport(response.reports))
            })
        .catch((error)=>{
            //console.log('error login'.error)
        })
    },[])

    return(
        <div className='dashboard-area' style={{marginTop:'100px'}}>
            {
                dataReport.map(data=>(
                    <div className='card mb-3' >
                    <div className='card-body text-muted' style={{backgroundColor:'ghostwhite', textAlign:'center'}}>
                        Session {data._session_no} -- {data.session_date}
                    </div>
                    <div style={{margin:'auto'}}><img  src={`http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=${data.image_id}`}/></div>
                    <div><h3 style={{textAlign:'center', fontWeight:'bold'}}>{data.activity_id}</h3></div>
                    <div><h5 style={{textAlign:'center'}}>{data.summary}</h5></div>
                    <div className='card-body text-muted' style={{textAlign:'center'}}>Co-Teaching partner <span style={{fontStyle:'italic'}}>Putri Rahmawati</span></div>
                    <div className='button'>Download Report</div>
                    <div className='card-body text-muted' style={{backgroundColor:'ghostwhite', textAlign:'center'}}>Next Activity/Improvement Plan:{data.next_activity}</div>
                    </div>
                ))
            } 
        </div>
    )

}

export default Reports