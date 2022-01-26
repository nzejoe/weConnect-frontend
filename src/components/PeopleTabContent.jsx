import React from "react";
import { PeopleToFollow, PopularPeople, Music } from '.'

const PeopleTabContent = () => {
  return (
    <div className="people-tab">
      <div className="list">
        <PeopleToFollow/>
        <PopularPeople/>
        <Music/>
      </div>
    </div>
  );
};

export default PeopleTabContent;
