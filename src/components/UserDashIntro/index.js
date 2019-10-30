import React from 'react';

function UserDashIntro({ username }) {
  return (
    <section className="user-dash-intro">
      <div className="user-dash-intro-banner">
        <div className="user-dash-intro-textarea">
          <a href="/" class="user-new-dash-nav-logo">
            Mentor <span>/&gt;ev</span>
          </a>
          <p>Welcome</p>
          <h1>{username}</h1>
          <button>Get started</button>
        </div>
        <div className="dim"></div>
      </div>
      <div className="mentor-dev-site-analytics">
        <div className="br-right">
          <img alt="menu toggler" src="/assets/img/contact.svg" />
          <span>Contacts Made</span>
          <p>Over 1M Mentors and Mentees Connections made.</p>
        </div>
        <div className="">
          <img alt="menu toggler" src="/assets/img/lecture.svg" />
          <span>Mentors</span>
          <p>Over 3K Mentors Available. Search and Connect</p>
        </div>
        <div className="br-top w-100 flex-row new-user-stages">
          <label className="active">
            <i className="mdi mdi-check"></i>
          </label>
          <button name="moA">Register</button>
          <label>
            <i className="mdi mdi-check"></i>
          </label>
          <button>Verify Email</button>
          <label>{/* <i className="mdi mdi-check"></i> */}</label>
          <button>Update Account</button>
        </div>
      </div>
    </section>
  );
}

export default UserDashIntro;
