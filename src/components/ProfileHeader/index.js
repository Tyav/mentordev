import React from 'react';

import Card from '../Card';
import ProfStats from '../ProfStats';
import ProfBio from '../ProfBio';
import profile_avatar from '../../assets/images/profile_two.png';

import Tag from '../Tag';
import './cardStyle.css';
import './ProfileHeader.css';

function ProfileHeader() {
  return (
    <div>
      <Card styles="card_style">
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
