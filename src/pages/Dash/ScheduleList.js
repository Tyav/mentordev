import React, { useState } from 'react';

import Card from '../../components/Card';
import UserDashHeading from '../../components/UserDashHeading';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

function ScheduleList() {
  const [edit, setEdit] = useState(true);
  const style = {
    width: '100%',
    background: '#fff',
    borderRadius: '4px',
    border: '1px solid #e6ecf5',
    padding: '20px',
    marginBottom: '20px',
  };

  const renderNormal = () => {
    return (
      <>
        <Button
          className="btn-success-solid"
          text="Edit Schedule"
          onButtonClick={() => setEdit(false)}
        />
      </>
    );
  };
  const renderSubmit = () => {
    return (
      <>
        <Button
          className="btn-success-solid"
          text="Save Changes"
          onButtonClick={() => setEdit(true)}
        />
      </>
    );
  };

  return (
    <>
      <UserDashHeading text="Mange Schedule" icon="clock" />
      <Card styles={style}>
        <div className="new-dash-single-schedule-list">
          <h2>
            <i className="mdi mdi-calendar-edit" /> Monday
          </h2>
          <InputField
            id="day"
            label="Day"
            type="text"
            name="day"
            placeholder="Day"
            value="Monday"
            disabled={edit}
          />
          <InputField
            id="from"
            label="From"
            type="text"
            name="from"
            placeholder="Available From"
            value="12:00 PM"
            disabled={edit}
          />
          <InputField
            id="to"
            label="To"
            type="text"
            name="to"
            placeholder="To"
            value="5:30 PM"
            disabled={edit}
          />
          {edit ? renderNormal() : renderSubmit()}
        </div>
      </Card>
    </>
  );
}

export default ScheduleList;
