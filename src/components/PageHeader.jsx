import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";

const PageHeader = () => {
  return (
    <div className="page-header">
      <h6>
        <Link to="/" className='home-link'>
          <MdOutlineArrowBack className='back-btn me-3'/>
        </Link>
        Maya Jonathan
      </h6>
    </div>
  );
};

export default PageHeader;
