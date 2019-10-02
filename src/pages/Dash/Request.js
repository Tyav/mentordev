import React, { useState, useEffect } from 'react';
import UserDashHeading from '../../components/UserDashHeading';
import Card from '../../components/Card';
import SingleRequest from '../../components/SingleRequest';

import { sendGetRequest } from '../../actions';

// requests for mentor
function Request() {
  const [requests, setRequests] = useState([]);
  const [status, setStatus] = useState([])
  
  useEffect(() => {
    sendGetRequest('/request').then(response => {
      if (response.data.payload) {
        if (status.length){
          let results = response.data.payload.filter(request => {
            return status.includes(request.status)
          });
          setRequests([...results]);
        } else {
          setRequests([...response.data.payload]);
        }
      }
      // setRequests([...response.data.payload]);
    });
  }, []);

  function filterRequest (){
      sendGetRequest('/request').then(response => {
        if (response.data.payload) {
          if (status.length){
            let results = response.data.payload.filter(request => {
              return status.includes(request.status)
            });
            setRequests([...results]);
          } else {
            setRequests([...response.data.payload]);
          }
        }
        // setRequests([...response.data.payload]);
      });
    
  }
  function statusHandler (e){
    if (!e.target.checked){
      let result = status.filter((stat)=>{
        return stat !== e.target.value
      })
      setStatus([...result])
    } else {
      setStatus([...status, e.target.value])
    }
    console.log(status)
    filterRequest()
  }

  const style = {
    width: '100%',
    background: '#fff',
    borderRadius: '4px',
    border: '1px solid #e6ecf5',
    padding: '20px',
    marginBottom: '20px'
  };
  return (
    <>
      <UserDashHeading text="Your most recent Requests" icon="message-alert" />
      {/* <input type="checkbox" onChange={statusHandler} value="Pending" />Pending
      <input type="checkbox" onChange={statusHandler} value="Approved" />Approved
      <input type="checkbox" onChange={statusHandler} value="Cancelled" />Cancelled
      <input type="checkbox" onChange={statusHandler} value="Rejected" />Rejected */}
      <label for="status">View: </label>
      <select id="status" onChange={(e)=>console.log(e.target.value)} >
        <option selected value={'All'}>All</option>
        <option value={'Approved'} >Approved</option>
        <option value={'Rejected'} >Rejected</option>
        <option value={'Pending'} >Pending</option>
        <option value={'Cancelled'} >Cancelled</option>
      </select>

      <Card styles={style}>
        {requests.map(request => {
          return (
            <SingleRequest
              key={request._id}
              requestId={request._id}
              status={request.status}
              mentor={request.schedule.mentor.name}
              scheduleDay={request.schedule.day}
              fromTime={request.schedule.time.from}
              toTime={request.schedule.time.to}
              mentorTags={request.schedule.mentor.skills}
            />
          );
        })}
      </Card>
    </>
  );
}

export default Request;
