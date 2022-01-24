import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { MdAccountCircle, MdAddCircleOutline } from "react-icons/md";

const Feeds = () => {
  return (
    <div className="feed-content">
      <InputGroup>
        <InputGroup.Text className="bg-white">
          <MdAccountCircle className="icon text-primary" />
        </InputGroup.Text>
        <FormControl placeholder="What's on your mind?" autoFocus={true} />
        <InputGroup.Text className="bg-white">
          <MdAddCircleOutline className="icon text-primary" />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Feeds;
