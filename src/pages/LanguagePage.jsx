import React from 'react';
import { PageHeader, PageUnavailable } from '../components';

const LanguagePage = () => {
  return (
    <div className="language-page not-available">
      <PageHeader pageTitle={"Language"} />
      <PageUnavailable />
    </div>
  );
};

export default LanguagePage;
