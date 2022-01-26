import React, { useState, useCallback } from "react"
import { Feeds, PeopleTabContent, NavTabs, TrendingTabContent } from '../components'
const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabIndex = useCallback((index) => {
    setTabIndex(index);
  }, []);
  
  return (
    <div className="home">
      <NavTabs handleTabIndex={handleTabIndex} />
      <div className="Tab-content">
        {tabIndex === 0 && <Feeds />}
        {tabIndex === 1 && <PeopleTabContent />}
        {tabIndex === 2 && <TrendingTabContent/>}
      </div>
    </div>
  );
};

export default HomePage;
