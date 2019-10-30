import React from 'react';

function UpcomingSchedule() {
  return (
    <div className="user-plan-page-request-snippet">
      <p className="pHeadings">
        <img alt="schedule" src="/assets/img/punctuality.svg" />
        Upcoming Schedules
      </p>
      <div className="user-upcoming-area">
        <div className="user-upcoming-area-list">
          <div className="user-single-upcoming">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h00/h50/12287059886110/men_L1_navigation.jpg"
              alt="upcoming"
            />
            <p>Tolu Adesina - 5:30PM to 8:00PM</p>
          </div>
          <div className="user-single-upcoming">
            <img
              src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD30001511/alessio400bbed6c271a3837f0f96a657c45e99e_thumbdf45b371c880d5f88a2af85f236c239f_thumb.jpg"
              alt="upcoming"
            />
            <p>Joseph Ibrahim - 5:30PM to 8:00PM</p>
          </div>
          <div className="user-single-upcoming">
            <img src="/assets/img/profile_two.png" alt="upcoming" />
            <p>Ben Mark - 5:30PM to 8:00PM</p>
          </div>
          <div className="user-single-upcoming">
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Flaurencebradford%2Ffiles%2F2018%2F03%2Fwomen-at-work-1200x800.jpg"
              alt="upcoming"
            />
            <p>Mark Bashiru - 5:30PM to 8:00PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
