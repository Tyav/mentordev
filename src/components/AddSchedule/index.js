import React, { useState, useEffect } from 'react';
import Button from '../Button';
import InputField from '../InputField';
import TimeField from '../TimeField';
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
  let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday',]
  // const [edit, setEdit] = useState(true);
  const [schedule, setSchedule] = useState({
    day: '',
    from: '',
    to: '',
    slots: 1,
    poolSize: 16,
    isClosed: false
  })


  function onChange(e){
        setSchedule({
          ...schedule, [e.target.name]: e.target.value
        })

  }
  const [closed, setClosed] = useState(schedule.isClosed);
  const token = localStorage.getItem('token');

  const handleCreateSchedule = async () => {
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
    console.log(body)
    
    try {
      axios({
        method: 'POST',
        url: `http://localhost:6060/api/v1/schedule`,
        data: body,
        headers
      }).then((res)=>{
        console.log(res.data)
        props.close()
      }).catch(()=>{
        alert('Error occured')
      });


    } catch (error) {
      console.log(error.message);
    }
  };
  // const handleScheduleEdit = () => {
  //   //edit logic goes here
  //   setEdit(!edit);
  // };

  // const renderEditBtn = () => {
  //   return (
  //     <>
  //       <Button
  //         className="btn-success-solid"
  //         style={{ marginRight: '10px' }}
  //         text="Edit"
  //         onButtonClick={() => setEdit(!edit)}
  //       />
  //     </>
  //   );
  // };
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

  // const scheduleEditBtn = () => {
  //   return 'closed' ? (
  //     <>
  //       <Button
  //         className="btn-success-solid"
  //         style={{ background: '#FFA001' }}
  //         text="Re-Open"
  //         onButtonClick={'handleScheduleStatus'}
  //       />
  //     </>
  //   ) : (
  //     <>
  //       <Button
  //         className="btn-danger-solid"
  //         text="Close"
  //         onButtonClick={'handleScheduleStatus'}
  //       />
  //     </>
  //   );
  // };
  return (
    <Card styles={style}>
      <h2>
        <i className="mdi mdi-calendar-edit" /> {schedule.day || day[new Date(Date.now()).getDay()]}
      </h2>
      <div className="new-dash-single-schedule-list">
        <InputField
          id="day"
          label="Day"
          type="text"
          name="day"
          placeholder="Day"
          value={schedule.day}
          change={onChange}
          // disabled={edit}
        />
        <InputField
          id="from"
          label="From"
          type="time"
          name="from"
          placeholder="Available From"
          value={schedule.from}
          // disabled={edit}
          change={onChange}
        />
        <InputField
          id="to"
          label="To"
          type="time"
          name="to"
          placeholder="To"
          value={schedule.to}
          change={onChange}
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
// disabled={edit}
        />

        <InputField
          id="poolSize"
          label="Pool Size"
          type="Number"
          name="poolSize"
          placeholder={15}
          value={schedule.poolSize}
          change={onChange}
// disabled={edit}
        />
        <div className="new-dash-single-schedule-list-btns"
          style={{width: '100%'}}
        >
          <Button
            className="btn-danger-solid"
            text="cancel"
            style={{float: 'right' }}
            onButtonClick={props.close}
          />
          <Button
            className="btn-success-solid"
            style={{ marginRight: '10px', float: 'right'}}
            text="Create"
            onButtonClick={handleCreateSchedule}
          />

          {/* {edit ? renderEditBtn() : renderSubmit()}
          {edit ? '' : scheduleEditBtn()} */}
        </div>
      </div>
    </Card>
  );
}

export default ScheduleCard;
