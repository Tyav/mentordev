import React from 'react';

import Card from '../Card';
import ProfStats from '../ProfStats';
import ProfBio from '../ProfBio';

import Tag from '../Tag';
import './ProfileHeader.css';
//Testing login route
function ProfileHeader() {
  const style = {
    background: '#fff',
    height: '300px',
    borderBottom: '1px solid #efefef',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '30px'
  };
  return (
    <div>
      <Card style={style}>
        <div className="profileImage">
          <img src="" alt="" />
        </div>
        <div className="profileHeaderItems">
          <div className="profileDetails">
            <span>
              <p className="username">
                Rukiee .O. <i className="mdi mdi-star" />
              </p>
              <p className="userEmail">rukiee@gmail.com</p>
            </span>
            <Tag tagname="PHP" />
            <Tag tagname="Javascript" />
          </div>
          <ProfStats />
          <ProfBio>
            Software Engineer at Facebook. Mailbox: xxx@xxx.com. *A fan of PHP*
          </ProfBio>
        </div>
      </Card>
    </div>
  );
}

export default ProfileHeader;
