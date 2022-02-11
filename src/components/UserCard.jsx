import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
// context
import { AuthUserContext } from "../store/auth-user-context";
import { getProfileImage, isFollowing } from "../utils";

const UserCard = ({ user }) => {
  const { user: authUser } = useContext(AuthUserContext);
  return (
    <Card className="user-card d-flex flex-column justify-content-between align-items-center py-3 px-4 text-dark">
      <Image
        roundedCircle={true}
        fluid={true}
        src={getProfileImage(user)}
        width={60}
      />
      <Link to={`/profile/${user.username}/`} className="text-center text-dark">
        <Card.Title className="m-0">{user.full_name}</Card.Title>
        <Card.Text className="text-muted">
          <small>@{user.username}</small>
        </Card.Text>
      </Link>
      {authUser && isFollowing(authUser, user.username) ? (
        <Button variant="sm" className="btn-primary">
          Following
        </Button>
      ) : (
        <Button variant="sm" className="btn-outline-primary btn-follow px-3">
          <MdAdd />
          Follow
        </Button>
      )}
    </Card>
  );
};

export default UserCard;
