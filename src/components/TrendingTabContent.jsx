import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const TrendingTabContent = () => {
  return <div className='trending-content'>
    <div className="header">
      <Link to="/"><MdOutlineKeyboardBackspace/></Link>
    </div>
  </div>;
};

export default TrendingTabContent;
