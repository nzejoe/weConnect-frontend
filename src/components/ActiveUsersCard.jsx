import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { MdAdd } from "react-icons/md";

const ActiveUsersCard = () => {
  return (
    <div className="active-users mt-3">
      <div className="header">
        <h6 className="text-dark">Follow People</h6>
      </div>
      <div className="body">
        <div className="card-wrapper">
          <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
            <Image
              roundedCircle={true}
              fluid={true}
              src="img/profile/profile-4.jpg"
              width={60}
            />
            <div className="text-center">
              <Card.Title className="m-0">Maya Jonathan</Card.Title>
              <Card.Text className="text-muted">@maya</Card.Text>
            </div>
            <Button variant="sm" className="btn-primary">
              Following
            </Button>
          </Card>
          <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
            <Image
              roundedCircle={true}
              fluid={true}
              src="img/profile/profile-5.jpg"
              width={60}
            />
            <div className="text-center">
              <Card.Title className="m-0">Sara Williams</Card.Title>
              <Card.Text className="text-muted">@sara</Card.Text>
            </div>
            <Button
              variant="sm"
              className="btn-outline-primary btn-follow px-3"
            >
              <MdAdd />
              Follow
            </Button>
          </Card>
          <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
            <Image
              roundedCircle={true}
              fluid={true}
              src="img/profile/profile-2.jpg"
              width={60}
            />
            <div className="text-center">
              <Card.Title className="m-0">Mel Emmanuel</Card.Title>
              <Card.Text className="text-muted">@mel</Card.Text>
            </div>
            <Button
              variant="sm"
              className="btn-outline-primary btn-follow px-3"
            >
              <MdAdd />
              Follow
            </Button>
          </Card>
          <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
            <Image
              roundedCircle={true}
              fluid={true}
              src="img/profile/profile-3.jpg"
              width={60}
            />
            <div className="text-center">
              <Card.Title className="m-0">David Max</Card.Title>
              <Card.Text className="text-muted">@daveyoung</Card.Text>
            </div>
            <Button
              variant="sm"
              className="btn-outline-primary btn-follow px-3"
            >
              <MdAdd />
              Follow
            </Button>
          </Card>
          <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
            <Image
              roundedCircle={true}
              fluid={true}
              src="img/profile/profile-1.jpg"
              width={60}
            />
            <div className="text-center">
              <Card.Title className="m-0">Mabel Olaniyi</Card.Title>
              <Card.Text className="text-muted">@mabel265</Card.Text>
            </div>
            <Button
              variant="sm"
              className="btn-outline-primary btn-follow px-3"
            >
              <MdAdd />
              Follow
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersCard;
