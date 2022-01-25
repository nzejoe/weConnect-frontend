import React from 'react';
import { InputGroup, Card, FormControl } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";

const SideBlog = () => {
  return (
    <aside className="aside-right">
      <div className="search-form d-none d-md-block">
        <Card>
          <InputGroup >
            <InputGroup.Text className="bg-white">
              <MdSearch className="icon text-primary" />
            </InputGroup.Text>
            <FormControl size='lg' placeholder="Search weConnect" />
          </InputGroup>
        </Card>
      </div>
    </aside>
  );
};

export default SideBlog;
