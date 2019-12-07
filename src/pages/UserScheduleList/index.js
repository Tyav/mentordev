import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';

import './UserScheduleList.css';
import ScheduleList from '../Dash/ScheduleList';

import SelectField from '../../components/SelectField';
import InputField from '../../components/InputField';
import { sendGetRequest } from '../../actions';
import { DashContext } from '../../Context';
import UserAppointment from '../UserAppointments';

/**
 * ISSUES:
 * Check for redundancies
 * Working on the sorting algorithm for this schedule
 * Work on the sortSchedules function
 */

function UserScheduleList({ id, close }) {
  let day = [
    { day: 'Sunday', color: '#f1f1f1', count: 0, appointments: [] },
    { day: 'Monday', color: '#bf00ff', count: 0, appointments: [] },
    { day: 'Tuesday', color: '#ff2300', count: 0, appointments: [] },
    { day: 'Wednesday', color: '#ffd300', count: 0, appointments: [] },
    { day: 'Thursday', color: '#f50', count: 0, appointments: [] },
    { day: 'Friday', color: '#0bdaac', count: 0, appointments: [] },
    { day: 'Saturday', color: '#0080ff', count: 0, appointments: [] },
  ];

  const [days, setDays] = useState([
    { day: 'Sunday', color: '#f1f1f1', count: 0, appointments: [] },
    { day: 'Monday', color: '#bf00ff', count: 0, appointments: [] },
    { day: 'Tuesday', color: '#ff2300', count: 0, appointments: [] },
    { day: 'Wednesday', color: '#ffd300', count: 0, appointments: [] },
    { day: 'Thursday', color: '#f50', count: 0, appointments: [] },
    { day: 'Friday', color: '#0bdaac', count: 0, appointments: [] },
    { day: 'Saturday', color: '#0080ff', count: 0, appointments: [] },
  ]);

  const [schedules, setSchedules] = useState([]);
  const { user, setUser } = useContext(DashContext);
  const [scheduleIds, setScheduleIds] = useState('');
  const [showAppointments, setShowAppointments] = useState(false);
  const [userSchedule, setUserSchedule] = useState({
    day: new Date(Date.now()).getDay(),
    from: '',
    to: '',
    slots: 1,
    poolSize: 16,
    isClosed: false,
    isInstant: true,
  });
  const [createScheduleResponse, setCreateScheduleResponse] = useState({
    message: '',
    show: false,
    type: '',
  });

  const token = readCookie('mentordev_token');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const getSchedule = () => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/me/schedules`,
      headers,
    })
      .then(response => {
        setSchedules(() => ({ data: response.data.payload, loading: false }));

        let userSchedules = response.data.payload;
        let scheduleLength = userSchedules.length;
        let ids = [];

        //Work on this sorting
        for (let index = 0; index < scheduleLength; index++) {
          ids.push(userSchedules[index]._id);
          for (let j = 0; j < day.length; j++) {
            if (day[j].day === userSchedules[index].day) {
              ++day[j].count;
            } else {
              continue;
            }
          }
        }

        setScheduleIds(ids.join(','));
        setDays([...day]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const sortSchedules = () => {
    for (let i in user.contacts) {
      for (let j in day) {
        if (day[j].day === user.contacts[i].schedule.day) {
          day[j].appointments.push(user.contacts[i].schedule);
        }
      }
    }
  };

  useEffect(() => {
    getSchedule();
    sortSchedules();
  }, [user, scheduleIds]);

  function addTime(str) {
    if (!str) return str;
    let time = str.split(':');
    time[0] = `${parseInt(time[0]) + 1}`;
    if (time[0].length === 1) time[0] = '0' + time[0];
    setUserSchedule({
      ...userSchedule,
      to: time.join(':'),
    });

    return time.join(':');
  }

  const handleCreateSchedule = e => {
    e.preventDefault();
    //this function handles closing and reopening os schedule
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const { slots } = userSchedule;
    const body = {
      ...userSchedule,
      slots: parseInt(slots),
      time: {
        to: userSchedule.to || document.getElementById('to').value,
        from: userSchedule.from,
      },
    };
    delete body.from;
    delete body.to;

    try {
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_BACKEND_URL}/schedule`,
        data: body,
        headers,
      })
        .then(res => {
          if (res.data.statusCode === 200) {
            console.log(res);
          } else {
            setCreateScheduleResponse({
              message: res.data.message,
              show: true,
              type: 'form-alert-danger',
            });
            setTimeout(() => {
              setCreateScheduleResponse({
                message: '',
                show: false,
                type: '',
              });
            }, 4000);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  function onChange(e) {
    const slotInput = document.getElementById('scheduleSlots');
    const poolInput = document.getElementById('schedulePoolSize');
    const isInstant = document.getElementById('isInstant');

    if (isInstant.checked) {
      slotInput.style.display = 'block';
      poolInput.style.display = 'none';
    } else {
      poolInput.style.display = 'block';
      slotInput.style.display = 'block';
    }
    setUserSchedule({
      ...userSchedule,
      [e.target.name]: e.target.value,
    });
  }

  function toggleScheduleHandler(e) {
    e.target.name === 'schedule'
      ? setShowAppointments(false)
      : setShowAppointments(true);
  }

  return (
    <>
      <div className="user-time-slot-creator">
        <h1>
          <img src="/assets/img/punctuality.svg" />
          &nbsp; Create Time Slot
        </h1>
        <div className="time-slot-form-area">
          <form onSubmit={handleCreateSchedule}>
            <div className="time-slot-main-field">
              <SelectField
                id="day"
                label="Day"
                type="text"
                name="day"
                value={userSchedule.day}
                change={onChange}
                day={day}
              />
              <InputField
                id="from"
                label="From"
                type="time"
                name="from"
                placeholder="Available From"
                value={userSchedule.from}
                change={onChange}
                required={true}
              />
              <InputField
                id="to"
                label="To"
                type="time"
                name="to"
                placeholder="To"
                value={userSchedule.to || addTime(userSchedule.from)}
                change={onChange}
                min={userSchedule.from}
                required={true}
              />
            </div>
            <div className="time-slot-extra-field">
              <p>
                *<i className="mdi mdi-info"></i> Mentee Requests are
                automatically approved for instant time slot type
              </p>
              <div className="time-slot-schedule-type">
                <p>Select mentee request approval type.</p>
                <div className="radioInput">
                  <input
                    type="radio"
                    name="isInstant"
                    id="isInstant"
                    onChange={onChange}
                    value={true}
                    checked={userSchedule.isInstant === 'false' ? false : true}
                    required={true}
                  />{' '}
                  &nbsp; Instant Approval
                </div>
                <div className="radioInput">
                  <input
                    type="radio"
                    name="isInstant"
                    id="onRequest"
                    onChange={onChange}
                    value={false}
                    required={true}
                  />
                  &nbsp; Require Approval
                </div>
              </div>
              <div id="scheduleSlots">
                <InputField
                  id="slots"
                  label="Slots"
                  type="Number"
                  name="slots"
                  placeholder={5}
                  value={userSchedule.slots}
                  change={onChange}
                  max={userSchedule.poolSize}
                />
              </div>
              <div id="schedulePoolSize">
                <InputField
                  id="poolSize"
                  label="Pool Size"
                  type="Number"
                  name="poolSize"
                  placeholder={15}
                  value={userSchedule.poolSize}
                  change={onChange}
                  required={true}
                  min={userSchedule.slots}
                />
              </div>
              <button className="slot-user-submit-button">
                Create time slot
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="user-schedule-toggle-button">
        <button name="schedule" onClick={toggleScheduleHandler}>
          Schedules
        </button>
        <button name="appointments" onClick={toggleScheduleHandler}>
          Appointments
        </button>
      </div>
      {!showAppointments ? (
        <div className="user-schedule-list-area">
          <ScheduleList />
        </div>
      ) : (
        <div className="user-days-and-schedule">
          <UserAppointment days={days} />
        </div>
      )}
    </>
  );
}

export default UserScheduleList;
