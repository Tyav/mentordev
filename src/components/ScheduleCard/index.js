import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button';
import InputField from '../InputField';
import Card from '../Card';
import { readCookie } from '../../helper/cookie'

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
  const token = readCookie('mentordev_token');
  const schedul= props.schedule;
  const [schedule, setSchedule] = useState({
    day: schedul.day,
    from: schedul.time.from,
    to: schedul.time.to,
    slots: schedul.slots,
    poolSize: schedul.poolSize,
    isClosed: schedul.isClosed,
    isInstant: schedul.isInstant
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

}  
function handleChecked(e, val) {
  setSchedule({
    ...schedule, [e.target.name]: val
  })
}
const handleSchedule = async () => {
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
        url: `${process.env.REACT_APP_BACKEND_URL}/schedule/${schedul._id}`,
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
          list="slot-days"
        />
        <datalist id="slot-days">
          {props.day.map((day)=>{
            return (
              <option>{day}</option>
            )
          })}
        </datalist>
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
          style="smallInputField"
          label="Slot size"
          type="Number"
          name="slots"
          placeholder={5}
          value={schedule.slots}
          disabled={edit}
          change={onChange}
        />

        {(!schedule.isInstant && (<InputField
          id="poolSize"
          label="Pool Size"
          type="Number"
          style="smallInputField"
          name="poolSize"
          placeholder={15}
          value={schedule.poolSize}
          disabled={edit}
          change={onChange}
        />))}
                <div className="scheduleType">
          <p>Select Approval Type</p>
          { (!edit && (<><div className="radioInput">
            <input
              type="radio"
              name="isInstant"
              id="isInstant"
              onChange={(e)=>handleChecked(e, true)}
              checked={schedule.isInstant}
            />{' '}
            Instant Approval
          </div>
          <div className="radioInput">
            <input
              type="radio"
              name="isInstant"
              id="onRequest"
              onChange={(e)=>handleChecked(e, false)}
              checked={!schedule.isInstant}
            />{' '}
            Require Approval
          </div></>)) || `: ${schedul.isInstant? 'Instant Approval': 'Require Approval'}` }
        </div>

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
