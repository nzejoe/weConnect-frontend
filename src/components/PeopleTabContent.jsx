import React from 'react';
import { Card, Image, Button } from 'react-bootstrap'
import { MdAdd } from 'react-icons/md'
 

const PeopleTabContent = () => {
  return (
    <div className="people-tab">
      <div className="list">
        <div className="people-to-follow">
            <h6>People you can follow</h6>
          <Card>
            <Card.Body>
                <div className="user-container">
                    <Image fluid roundedCircle width={60} src='img/profile/profile-1.jpg'/>
                </div>
                <div className="btn-follow">
                    <Button ><MdAdd/>Follow</Button>
                </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PeopleTabContent;
