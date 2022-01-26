import React, { useState } from "react";
import { Card } from "react-bootstrap";

const ProfileTabs = ({ getTabIndex }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  return (
    <Card className="profile-tabs d-flex flex-row align-items-center my-4 text-muted shadow-md">
      <h6
        className={`p-2 radius-left ${tabIndex === 0 ? "tab-active" : ""}`}
        onClick={() => tabIndexHandler(0)}
      >
        FEED
      </h6>
      <h6
        className={`p-2 radius-right ${tabIndex === 1 ? "tab-active" : ""}`}
        onClick={() => tabIndexHandler(1)}
      >
        LIKED
      </h6>
    </Card>
  );
};

export default ProfileTabs;
