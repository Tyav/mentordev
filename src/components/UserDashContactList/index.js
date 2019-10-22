import React from 'react';

function UserDashContactList() {
  return (
    <aside className="user-dash-contact-list">
      <div className="user-dash-single-contact">
        <img src="assets/img/profile_two.png" />
        <div className="single-user-detail">
          <p className="single-user-detail-name">
            Ibrahim Joseph <i className="mdi mdi-dots-vertical"></i>
          </p>
          <p className="single-user-detail-email">
            <img src="/assets/img/email.svg" /> &nbsp; josephibrahi@gmail.com
          </p>
          <p className="single-user-detail-schedule">
            <img src="/assets/img/clock.svg" />
            &nbsp; WED 13:10 - 14:10
          </p>
        </div>
      </div>
      <div className="user-dash-single-contact">
        <img src="assets/img/profile_one.png" />
        <div className="single-user-detail">
          <p className="single-user-detail-name">
            Oke Tega <i className="mdi mdi-dots-vertical"></i>
          </p>
          <p className="single-user-detail-email">
            <img src="/assets/img/email.svg" />
            &nbsp; oketegah@gmail.com
          </p>
          <p className="single-user-detail-schedule">
            <img src="/assets/img/clock.svg" />
            &nbsp; WED 13:00 - 17:00
          </p>
        </div>
      </div>
    </aside>
  );
}

export default UserDashContactList;
