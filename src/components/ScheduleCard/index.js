import React, { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField';
import Card from '../Card';
import axios from 'axios';

const style = {
  width: '100%',
  background: '#fff',
  borderRadius: '4px',
  border: '1px solid #e6ecf5',
  padding: '20px',
  marginBottom: '20px'
};

function ScheduleCard(props) {
  const [edit, setEdit] = useState(true);
  const token = localStorage.getItem('token');
  // const [schedule, ] 
  const schedul= props.schedule;
  const [schedule, setSchedule] = useState({
    day: schedul.day,
    from: schedul.time.from,
    to: schedul.time.to,
    slots: schedul.slots,
    poolSize: schedul.poolSize,
    isClosed: schedul.isClosed
  })
  const closeSchedule = (e)=>{
    e.preventDefault();
    setSchedule({
      ...schedule, isClosed: !schedule.isClosed
    })
  }
  function onChange(e){
    setSchedule({
      ...schedule, [e.target.name]: e.target.value
    })
}  const handleSchedule = async () => {
    //this function handles closing and reopening os schedule
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };

    const body = {
      ...schedule, time: {to: schedule.to, from: schedule.from}
    };
    delete body.from;
    delete body.to;
    // const body = JSON.stringify({
    //   isClosed: !closed
    // });
    setEdit(!edit);
    try {
      const res = await axios({
        method: 'PUT',
        url: `http://localhost:6060/api/v1/schedule/${schedul._id}`,
        data: body,
        headers
      });

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleScheduleEdit = () => {
    //edit logic goes here
  };

  const renderEditBtn = () => {
    return (
      <>
        <Button
          className="btn-success-solid"
          style={{ marginRight: '10px' }}
          text="Edit"
          onButtonClick={(e) =>{e.preventDefault();setEdit(!edit)}}
        />
      </>
    );
  };
  const renderSubmit = () => {
    return (
      <>
        <Button
          className="btn-success-solid"
          style={{ marginRight: '10px' }}
          text="Save"
          onButtonClick={handleSchedule}
        />
      </>
    );
  };

  return (
    <Card styles={style}>
      <h2>
        <i className="mdi mdi-calendar-edit" /> {schedule.day}
      </h2>
      <form className="new-dash-single-schedule-list">
        <InputField
          id="day"
          label="Day"
          type="text"
          name="day"
          placeholder="Day"
          value={schedule.day}
          disabled={edit}
          change={onChange}
        />
        <InputField
          id="from"
          label="From"
          type="time"
          name="from"
          placeholder="Available From"
          value={schedule.from}
          disabled={edit}
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
          disabled={edit}
          change={onChange}
          min={schedule.from}
          required={true}
        />
        <InputField
          id="slots"
          label="Slots"
          type="Number"
          name="slots"
          placeholder={5}
          value={schedule.slots}
          disabled={edit}
          change={onChange}
        />

        <InputField
          id="poolSize"
          label="Pool Size"
          type="Number"
          name="poolSize"
          placeholder={15}
          value={schedule.poolSize}
          disabled={edit}
          change={onChange}
        />
        <div className="new-dash-single-schedule-list-btns">
          {edit ? renderEditBtn() : renderSubmit()}
          {edit ? '' : (
            <Button
              className={schedule.isClosed? "btn-danger-solid":"btn-success-solid"}
              style={{ background:schedule.isClosed? '#FFA001':'red' }}
              text={schedule.isClosed?"Re-Open": "Close"}
              onButtonClick={closeSchedule}
            />
          )}
        </div>
      </form>
    </Card>
  );
}

export default ScheduleCard;
