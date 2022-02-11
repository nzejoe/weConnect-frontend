import React from 'react'
import { Card, Image, Button } from 'react-bootstrap';
import { MdAdd } from "react-icons/md";

import { getProfileImage } from '../utils'

const UserCard = ({ user }) => {

  return (
    <Card className="d-flex flex-column justify-content-between align-items-center py-3 px-4">
      <Image
        roundedCircle={true}
        fluid={true}
        src={getProfileImage(user)}
        width={60}
      />
      <div className="text-center">
        <Card.Title className="m-0">{user.full_name}</Card.Title>
        <Card.Text className="text-muted">@{user.username}</Card.Text>
      </div>
      <Button variant="sm" className="btn-primary">
        Following
      </Button>
    </Card>
  );
}

export default UserCard;