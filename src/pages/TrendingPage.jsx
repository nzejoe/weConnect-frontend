import React from 'react';
import { PageHeader, PostList, Base } from '../components';

const TrendingPage = () => {
  return (
    <Base>
      <div className="trending-page">
        <PageHeader pageTitle={"#Trending"} />
        <PostList />
      </div>
    </Base>
  );
};

export default TrendingPage;
