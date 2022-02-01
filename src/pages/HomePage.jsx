import React, { useState, useCallback, useContext, useEffect } from "react"
import { Feeds, PeopleTabContent, NavTabs, TrendingTabContent } from '../components'
import { Base } from '../components';

// context 
import { AuthUserContext } from "../store/auth-user-context";
const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { user, getUserInfo } = useContext(AuthUserContext);

  console.log(user)

  useEffect(()=>{
    getUserInfo();
    // eslint-disable-next-line
  },[])
 
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
