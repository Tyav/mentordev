import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';
import './ScheduleList.css';
import { DashContext } from '../../Context';
import { sendGetRequest } from '../../actions';

export default function ScheduleList(props) {
  const [data, setData] = useState({
    message: 'Hi, add me to your time slot',
    schedule: props.id,
    idp: '',
  });

  const { user } = useContext(DashContext);

  const [userIdp, setUserIdp] = useState([]);
  /**
   * ISSUES:
   * IDP doesn't have default value
   *
   */

  function idpSelectHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleRequest(e) {
    e.preventDefault();
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/request/`,
      method: 'post',
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${readCookie('mentordev_token')}`,
      },
    })
      .then(resp => {})
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    const fetchUserIdp = async () => {
      let response = await sendGetRequest('/idp');
      setUserIdp(response.data.payload);
    };
    if (!user.idps) fetchUserIdp();
  }, []);

  return (
    <div className="scheduleList">
      <form>
        <div className="mentorScheduleDetails">
          <p key={props.id}>
            <span>Day</span>
            {`${props.day}`}
          </p>
          <p>
            <span>From</span>
            {props.from}
          </p>
          <p>
            <span>To</span>
            {props.to}
          </p>
          <div className="user-request-select-options">
            <p>Select IDP</p>
            <select onChange={idpSelectHandler} name="idp">
              <option>---Select IDP---</option>
              {user.idps
                ? user.idps.map(idp => {
                    if (!idp.isTied) {
                      return (
                        <>
                          <otpion>---Select IDP---</otpion>
                          <option key={idp._id} value={idp._id}>
                            {idp.title}
                          </option>
                        </>
                      );
                    }
                  })
                : userIdp.map(idp => {
                    if (!idp.isTied) {
                      return (
                        <>
                          <option key={idp._id} value={idp._id}>
                            {idp.title}
                          </option>
                        </>
                      );
                    }
                  })}
            </select>
          </div>
        </div>
        <button onClick={handleRequest}>
          <i className="mdi mdi-send"></i>{' '}
          <span className="mentorMainDet">send request</span>
        </button>
      </form>
    </div>
  );
}
