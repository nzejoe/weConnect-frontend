import React, { useState, useCallback, useContext, useEffect } from "react";
import {
  Feeds,
  PeopleTabContent,
  NavTabs,
  TrendingTabContent,
} from "../components";
import { Base } from "../components";

// context
import { AuthUserContext } from "../store/auth-user-context";
import { PostContext } from "../store/post-context";
const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { user, isAuthenticated } = useContext(AuthUserContext);
  const { getUserPosts, refresh } = useContext(PostContext);
  // user post getter
  useEffect(() => {
    if (isAuthenticated) {
      getUserPosts();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, refresh, user]);

  const handleTabIndex = useCallback((index) => {
    setTabIndex(index);
  }, []);

  return (
    <Base>
      <div className="home">
        <NavTabs handleTabIndex={handleTabIndex} />
        <div className="Tab-content">
          {tabIndex === 0 && <Feeds />}
          {tabIndex === 1 && <PeopleTabContent />}
          {tabIndex === 2 && <TrendingTabContent />}
        </div>
      </div>
    </Base>
  );
};

export default HomePage;
