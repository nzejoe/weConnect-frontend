import React from "react"
import { Feeds, PeopleTabContent } from '../components'
const HomePage = ({ tabIndex }) => {
  
  return (
    <div className="home">
      <div className="blog-post">
        {tabIndex === 0 && <Feeds />}
        {tabIndex === 1 && <PeopleTabContent />}
      </div>
    </div>
  );
};

export default HomePage;
