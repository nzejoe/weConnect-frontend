import React from 'react';
import { PostForm, PostList } from '.';

const TrendingTabContent = () => {
  return (
    <div className="trending-content">
      <PostForm/>
      <PostList/>
    </div>
  );
};

export default TrendingTabContent;
