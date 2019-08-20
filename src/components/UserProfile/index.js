import React from 'react';

import Tag from '../Tag';

function Userprofile() {
  return (
    <div className="new-dash-user-profile">
      <div className="new-dash-card-header">
        <img src="/assets/img/celebrate.png" alt="user profile" />
        <i className="mdi mdi-dots-vertical" />
      </div>
      <p className="new-dash-username">Oke Tega</p>
      <p className="new-dash-username">oketegah@gmail.com</p>
      <p className="new-dash-account-brief">
        <span>
          1K <i>requests</i>
        </span>{' '}
        <span>
          47.5K <i>mentees</i>
        </span>{' '}
        <span>
          5 <i>messages</i>
        </span>
      </p>
      <p className="new-dash-user-description">
        Software Engineer at Facebook. Mailbox: xxx@xxx.com. *A fan of PHP*
      </p>
      <div className="new-dash-user-tags">
        <Tag tagname="PHP" />
        <Tag tagname="Javascript" />
      </div>
      <NavLink className="new-dash-profile-link" to="/dashboard/profile">
        <i className="mdi mdi-circle-edit-outline" /> Edit Profile
      </NavLink>
    </div>
  );
}

export default Userprofile;
