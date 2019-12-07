import React, { useEffect, useState } from 'react';

//Helpers
import {
  sendGetRequest,
  sendPutRequest,
  sendDeleteRequest,
} from '../../actions';
import SingleRequest from '../../components/SingleRequest';

//styling
import './UserDashRequest.css';
import UserDashSingleRequest from '../../components/UserDashSingleRequest';

function UserDashRequest() {
  const [requests, setRequests] = useState([]);
  const [filteredRequest, setFilteredRequest] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    sendGetRequest('/request').then(response => {
      console.log(response);
      if (response.data.payload) {
        if (status.length) {
          let results = response.data.payload.filter(request => {
            return status.includes(request.status);
          });
          setRequests([...results]);
        } else {
          setRequests([...response.data.payload]);
        }
      }
    });
  }, []);

  const cancelRequestHandler = id => {
    sendPutRequest(`/request/${id}?status=Cancelled`).then(response => {
      if (response.data.payload) {
        sendGetRequest('/request').then(response => {
          if (response.data.payload) {
            if (status.length) {
              let results = response.data.payload.filter(request => {
                return status.includes(request.status);
              });
              setRequests([...results]);
            } else {
              setRequests([...response.data.payload]);
            }
          }
        });
      }
    });
  };

  // delete request
  const deleteRequestHandler = id => {
    sendDeleteRequest(`/request/${id}`).then(response => {
      if (response.data.statusCode === 200) {
        let results = requests.filter(request => {
          if (request._id === id) {
            request.delete = false;
            return false;
          }
          return true;
        });
        setRequests([...results]);
      }
    });
  };

  function filterRequest() {
    sendGetRequest('/request').then(response => {
      if (response.data.payload) {
        if (status.length) {
          let results = response.data.payload.filter(request => {
            return status.includes(request.status);
          });
          setRequests([...results]);
        } else {
          setRequests([...response.data.payload]);
        }
      }
    });
  }

  function statusHandler(e) {
    if (!e.target.checked) {
      let result = status.filter(stat => {
        return stat !== e.target.value;
      });
      setStatus([...result]);
    } else {
      setStatus([...status, e.target.value]);
    }
    console.log(status);
    filterRequest();
  }

  function filterRequestHandler(e) {
    if (e.target.value === 'Pending') {
      setFilteredRequest(
        requests.filter(request => request.status === 'Pending'),
      );
      return;
    }
    if (e.target.value === 'Approved') {
      setFilteredRequest(
        requests.filter(request => request.status === 'Approved'),
      );
      return;
    }
    if (e.target.value === 'Cancelled') {
      setFilteredRequest(
        requests.filter(request => request.status === 'Cancelled'),
      );
      return;
    }
  }

  return (
    <>
      <div className="user-mentee-request">
        <div className="mentee-request-filter">
          <select onChange={filterRequestHandler}>
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        {!filteredRequest.length
          ? requests.map(request => {
              return (
                <UserDashSingleRequest
                  status={request.status}
                  key={request._id}
                  requestId={request._id}
                  mentor={request.schedule.mentor.name}
                  scheduleDay={request.schedule.day}
                  fromTime={request.schedule.time.from}
                  toTime={request.schedule.time.to}
                  mentorTags={request.schedule.mentor.skills}
                  cancelRequestHandler={cancelRequestHandler}
                  deleteRequestHandler={deleteRequestHandler}
                />
              );
            })
          : filteredRequest.map(request => {
              return (
                <UserDashSingleRequest
                  status={request.status}
                  key={request._id}
                  requestId={request._id}
                  mentor={request.schedule.mentor.name}
                  scheduleDay={request.schedule.day}
                  fromTime={request.schedule.time.from}
                  toTime={request.schedule.time.to}
                  mentorTags={request.schedule.mentor.skills}
                  cancelRequestHandler={cancelRequestHandler}
                  deleteRequestHandler={deleteRequestHandler}
                />
              );
            })}
      </div>
    </>
  );
}

export default UserDashRequest;
