import React from 'react';

import Card from '../Card';
import ProfStats from '../ProfStats';
import ProfBio from '../ProfBio';
import profile_avatar from '../../assets/images/profile_two.png';

import Tag from '../Tag';
import './ProfileHeader.css';
//Testing login route
function ProfileHeader() {
  const style = {
    background: '#fff',
    // height: '300px',
    // borderBottom: '1px solid #efefef',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '5px'
  };
  return (
    <div>
      <Card style={style}>
        <div className="profileImage">
          <img src={profile_avatar} alt="" className="image" />
        </div>
        <div className="profileHeaderItems">
          <div className="profileDetails">
            <span className="name_star">
              <p className="username">
                Rukiee .O.
                <span className="stars">
                  <i className="mdi mdi-star" />
                  <i className="mdi mdi-star" />
                  <i className="mdi mdi-star" />
                </span>
              </p>
              <p className="userEmail">rukiee@gmail.com</p>
            </span>
            <Tag tagname="PHP" />
            <Tag tagname="Javascript" />
          </div>
          <div className="rank_bio">
            <ProfStats />
            <ProfBio>
              <span>Software Engineer at Facebook. Mailbox: xxx@xxx.com. *A fan of PHP*</span>
            </ProfBio>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProfileHeader;
