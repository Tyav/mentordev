import React, {useState} from 'react';
import Tag from '../Tag';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MentorSchedule from '../MentorSchedule'


function UserLatestConnect({
  image,
  name,
  email,
  tags,
  schedule,
  userlocation,
  isMentor,
  search,
  key,
  id,
  buttons,
  requestId, //bringing in the requestId as a prop
  requestApproval //the function that handles the approval in the parent object...
}) {
  const [open, setOpen] = useState(false);

  function handleClose(){
    setOpen(false)
  }
  function handleOpen(){
    setOpen(true)
  }
  tags = tags || [];
  return (
    <>
    <div className="new-dash-user-profile" key={id} >
      <div className="new-dash-card-header">
        <img src={image} alt="user profile" />
        <i className="mdi mdi-dots-vertical" />
      </div>
      <p className="new-dash-username">{name}</p>
      <p className="new-dash-username">{email}</p>
      <div className="new-dash-user-tags">
        {tags.map((tag, index) => (
          <Tag tagname={tag} key={index} />
        ))}
      </div>
      <p className="new-dash-user-mentor-sch">
        <span>{schedule}</span>
      </p>
      <p>{userlocation}</p>
      <div className="conditional-buttons">
        {buttons ? addButtons(buttons, requestId, requestApproval) : ''}
      </div>
      {search && <center><a href="#" onClick={handleOpen} className={'new-dash-profile-link'}>View Schedules</a></center>}
    </div>
    <Dialog open={open} >
        {/* <center><DialogTitle id="">Complete {id}</DialogTitle></center> */}
        <DialogContent>
          <MentorSchedule id={id}/>
        </DialogContent>
        <center><a href="#" onClick={handleClose} className={'new-dash-profile-link'}>Close</a></center>
        <DialogActions/>
    </Dialog>    
    </>
  );
}

// the addButtons function with two parameters. the buttons array ['Approve', 'Reject'], and the requestId
function addButtons(buttons, requestId, requestApprova) {
  if (buttons.length < 1) {
    return '';
  }
  return buttons.map((button, index) => (
    <a
      className={`new-dash-schedule-link ${button} button${index}`}
      href="#"
      key={index}
      id={requestId}
      onClick={requestApprova}
    >
      <i className="mdi lg-green-ic" /> {button}
    </a>
  ));
}

export default UserLatestConnect;
