import React from 'react';

import UserDashSingleCard from '../UserDashSingleCard';

function DashHomeList() {
  return (
    <section className="user-dash-users-list">
      <p className="user-section-heading">
        <img src="/assets/img/hiring.svg" /> Available Mentors
        <div>
          <input
            type="text"
            name="user-dash-search"
            placeholder="Search Mentors by Stack, Location or Name"
          />
          <img alt="search" src="/assets/img/icons8-search.svg" />
        </div>
      </p>
      <div className="users-listing">
        <UserDashSingleCard
          username="OKE TEGA"
          briefDescription="I am an aspiring Sofware Engineer from Lagos, Nigeria"
          email="oketegah@gmail.com"
          location="Lagos, Nigeria"
          stacks={['PHP', 'Javascript']}
          coverImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
          profileImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
        />
        <UserDashSingleCard
          username="Tolu Adesina"
          briefDescription="I am an aspiring Sofware Engineer from Lagos, Nigeria"
          email="oketegah@gmail.com"
          location="Lagos, Nigeria"
          stacks={['PHP', 'Javascript']}
          coverImage="https://images.unsplash.com/photo-1561821277-481f9c1d229c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          profileImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
        />
        <UserDashSingleCard
          username="Ibrahim Joseph"
          briefDescription="I am an aspiring Sofware Engineer from Lagos, Nigeria"
          email="oketegah@gmail.com"
          location="Lagos, Nigeria"
          stacks={['PHP', 'Javascript']}
          coverImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
          profileImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
        />
        <UserDashSingleCard
          username="Mike Adenuga"
          briefDescription="I am an aspiring Sofware Engineer from Lagos, Nigeria"
          email="oketegah@gmail.com"
          location="Lagos, Nigeria"
          stacks={['PHP', 'Javascript']}
          coverImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
          profileImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
        />
        <UserDashSingleCard
          username="Bill Gate"
          briefDescription="I am an aspiring Sofware Engineer from Lagos, Nigeria"
          email="oketegah@gmail.com"
          location="Lagos, Nigeria"
          stacks={['PHP', 'Javascript']}
          coverImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
          profileImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
        />
      </div>
    </section>
  );
}

export default DashHomeList;
