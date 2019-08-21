import React, { useState, useEffect } from 'react';
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

function ScheduleCard({ schedule }) {
  const [edit, setEdit] = useState(true);
  const [closed, setClosed] = useState(schedule.isClosed);
  const token = localStorage.getItem('token');

  const handleScheduleStatus = async () => {
    //this function handles closing and reopening os schedule
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };

    const body = JSON.stringify({
      isClosed: !closed
    });

    try {
      const res = await axios({
        method: 'PUT',
        url: `http://localhost:6060/api/v1/schedule/${schedule._id}`,
        data: body,
        headers
      });

      setClosed(!closed);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleScheduleEdit = () => {
    //edit logic goes here
    setEdit(!edit);
  };

  const renderEditBtn = () => {
    return (
      <>
        <Button
          className="btn-success-solid"
          style={{ marginRight: '10px' }}
          text="Edit"
          onButtonClick={() => setEdit(!edit)}
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
          onButtonClick={handleScheduleEdit}
        />
      </>
    );
  };

  const scheduleEditBtn = () => {
    return closed ? (
      <>
        <Button
          className="btn-success-solid"
          style={{ background: '#FFA001' }}
          text="Re-Open"
          onButtonClick={handleScheduleStatus}
        />
      </>
    ) : (
      <>
        <Button
          className="btn-danger-solid"
          text="Close"
          onButtonClick={handleScheduleStatus}
        />
      </>
    );
  };

  return (
    <Card styles={style}>
      <h2>
        <i className="mdi mdi-calendar-edit" /> {schedule.day}
      </h2>
      <div className="new-dash-single-schedule-list">
        <InputField
          id="day"
          label="Day"
          type="text"
          name="day"
          placeholder="Day"
          value={schedule.day}
          disabled={edit}
        />
        <InputField
          id="from"
          label="From"
          type="text"
          name="from"
          placeholder="Available From"
          value={schedule.time.from}
          disabled={edit}
        />
        <InputField
          id="to"
          label="To"
          type="text"
          name="to"
          placeholder="To"
          value={schedule.time.to}
          disabled={edit}
        />
        <InputField
          id="slots"
          label="Slots"
          type="Number"
          name="slots"
          placeholder={5}
          value={schedule.slots}
          disabled={edit}
        />

        <InputField
          id="poolSize"
          label="Pool Size"
          type="Number"
          name="poolSize"
          placeholder={15}
          value={schedule.poolSize}
          disabled={edit}
        />
        <div className="new-dash-single-schedule-list-btns">
          {edit ? renderEditBtn() : renderSubmit()}
          {edit ? '' : scheduleEditBtn()}
        </div>
      </div>
    </Card>
  );
}

export default ScheduleCard;
