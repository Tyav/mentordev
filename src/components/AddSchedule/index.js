import React, { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField';
import Card from '../Card';
import FormAlert from '../Alerts/FormAlert';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';

import './AddSchedule.css';

const style = {
  width: '100%',
  background: '#fff',
  borderRadius: '4px',
  border: '1px solid #e6ecf5',
  padding: '20px',
  marginBottom: '20px',
};

function AddSchedule(props) {
  let day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
  ];
  // const [edit, setEdit] = useState(true);
  const [schedule, setSchedule] = useState({
    day: props.day[new Date(Date.now()).getDay()],
    from: '',
    to: '',
    slots: 1,
    poolSize: 16,
    isClosed: false,
    "isInstant": true
  });

  const [createScheduleResponse, setCreateScheduleResponse] = useState({
    message: '',
    show: false,
    type: '',
  });

  function addTime(str) {
    if (!str) return str;
    let time = str.split(':');
    time[0] = `${parseInt(time[0]) + 1}`;
    if (time[0].length === 1) time[0] = '0' + time[0];
    setSchedule({
      ...schedule,
      to: time.join(':'),
    });

    return time.join(':');
  }

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
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value,
    });
  }
  const token = readCookie('mentordev_token');
  const handleCreateSchedule = async e => {
    e.preventDefault();
    //this function handles closing and reopening os schedule
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const { slots } = schedule;
    const body = {
      ...schedule,
      slots: parseInt(slots),
      time: { 
        to: schedule.to || document.getElementById('to').value, 
        from: schedule.from },
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
            props.close();
          } else {
            console.log(res.data);
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
        .catch(() => {
          alert('Error occured');
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderSubmit = () => {
    return (
      <>
        <Button
          className="btn-success-solid"
          style={{ marginRight: '10px' }}
          text="Save"
          onButtonClick={'handleScheduleEdit'}
        />
      </>
    );
  };

  return (
    <Card styles={style}>
      <h2>
        <i className="mdi mdi-calendar-edit" />{' '}
        {schedule.day || day[new Date(Date.now()).getDay()]}
      </h2>
      <form className="new-dash-single-schedule-list" onSubmit={handleCreateSchedule}>
        {createScheduleResponse.show ? (
          <FormAlert type={createScheduleResponse.type}>
            {createScheduleResponse.message}
          </FormAlert>
        ) : (
          ''
        )}
        <InputField
          id="day"
          label="Day"
          type="text"
          name="day"
          placeholder="Day"
          value={schedule.day}
          change={onChange}
          required={true}
          list="slot-days"
        />

        <InputField
          id="from"
          label="From"
          type="time"
          name="from"
          placeholder="Available From"
          value={schedule.from}
          change={onChange}
          required={true}
        />
        <InputField
          id="to"
          label="To"
          type="time"
          name="to"
          placeholder="To"
          value={schedule.to || addTime(schedule.from)}
          change={onChange}
          min={schedule.from}
          required={true}
          // disabled={edit}
        />
        <p className="isInstantWarning">
          <i className="mdi mdi-info"></i> Mentee Requests are automatically
          approved for instant time slot type
        </p>
        <div className="scheduleType">
          <p>Select Approval Type</p>
          <div className="radioInput">
            <input
              type="radio"
              name="isInstant"
              id="isInstant"
              onChange={onChange}
              value={true}
              checked={schedule.isInstant === 'false'? false: true}
              required={true}
            />{' '}
            Instant Approval
          </div>
          <div className="radioInput">
            <input
              type="radio"
              name="isInstant"
              id="onRequest"
              onChange={onChange}
              value={false}
              required={true}
              // checked={schedule.isInstant === 'false'? false: true}
            />{' '}
            Require Approval
          </div>
        </div>
        <div id="scheduleSlots">
          <InputField
            id="slots"
            label="Slots"
            type="Number"
            name="slots"
            placeholder={5}
            value={schedule.slots}
            change={onChange}
            max={schedule.poolSize}
          />
        </div>
        <div id="schedulePoolSize">
          <InputField
            id="poolSize"
            label="Pool Size"
            type="Number"
            name="poolSize"
            placeholder={15}
            value={schedule.poolSize}
            change={onChange}
            required={true}
            min={schedule.slots}
          />
        </div>
        <div
          className="new-dash-single-schedule-list-btns"
          style={{ width: '100%' }}
        >
          <Button
            className="btn-success-solid"
            text="Create"
            type="submit"
            style={{ marginRight: '10px' }}
          />
          <Button
            className="btn-danger-solid"
            text="cancel"
            onButtonClick={props.close}
          />
        </div>
      </form>
    </Card>
  );
}

export default AddSchedule;
