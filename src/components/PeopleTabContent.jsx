import React from "react";
import { PeopleToFollow, PopularPeople } from '.'

const PeopleTabContent = () => {
  return (
    <div className="people-tab">
      <div className="list">
        <PeopleToFollow/>
        <PopularPeople/>
      </div>
    </div>
  );
};

export default PeopleTabContent;
