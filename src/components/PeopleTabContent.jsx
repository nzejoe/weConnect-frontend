import React from "react";
import { PeopleToFollow} from '.'

const PeopleTabContent = () => {
  return (
    <div className="people-tab">
      <div className="list">
        <PeopleToFollow/>
      </div>
    </div>
  );
};

export default PeopleTabContent;
