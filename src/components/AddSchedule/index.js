import React, { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField';
import Card from '../Card';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';

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
    day: day[new Date(Date.now()).getDay()],
    from: '',
    to: '',
    slots: 1,
    poolSize: 16,
    isClosed: false,
  });

  function onChange(e) {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value,
    });
  }
  const token = readCookie('mentordev_token');

  const handleCreateSchedule = async e => {
    //this function handles closing and reopening os schedule
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const body = {
      ...schedule,
      time: { to: schedule.to, from: schedule.from },
    };
    delete body.from;
    delete body.to;

    try {
      axios({
        method: 'POST',
        url: `http://localhost:6060/api/v1/schedule`,
        data: body,
        headers,
      })
        .then(res => {
          props.close();
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
      <form
        className="new-dash-single-schedule-list"
        onSubmit={handleCreateSchedule}
      >
        <InputField
          id="day"
          label="Day"
          type="text"
          name="day"
          placeholder="Day"
          value={schedule.day}
          change={onChange}
          required={true}
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
          value={schedule.to}
          change={onChange}
          min={schedule.from}
          required={true}
          // disabled={edit}
        />
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
        <div
          className="new-dash-single-schedule-list-btns"
          style={{ width: '100%' }}
        >
          <Button
            className="btn-danger-solid"
            text="cancel"
            style={{ float: 'right' }}
            onButtonClick={props.close}
          />
          <Button
            className="btn-success-solid"
            style={{ marginRight: '10px', float: 'right' }}
            text="Create"
            type="submit"
          />
        </div>
      </form>
    </Card>
  );
}

export default AddSchedule;
