import React from 'react';
import { PageHeader, PageUnavailable, Base } from '../components';

const LanguagePage = () => {
  return (
    <Base>
      <div className="language-page not-available">
        <PageHeader pageTitle={"Language"} />
        <PageUnavailable />
      </div>
    </Base>
  );
};

export default LanguagePage;
