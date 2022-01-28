import React from 'react';
import { PageHeader, PostList } from '../components';

const TrendingPage = () => {
  return <div className='trending-page'>
      <PageHeader pageTitle={'#Trending'}/>
      <PostList/>
  </div>;
};

export default TrendingPage;
