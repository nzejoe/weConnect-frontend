import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
// context
import { AuthUserContext } from "../store/auth-user-context";
import { UsersContext } from "../store/users-context";
//utils
import { getProfileImage, isFollowing } from "../utils";

const UserCard = ({ user }) => {
  const { user: authUser } = useContext(AuthUserContext);
  const { userFollow, userUnfollow } = useContext(UsersContext);

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
      {isFollowing(authUser, user) ? (
        <Button
          variant="sm"
          className="btn-primary"
          onClick={() => userUnfollow(user.id)}
        >
          Following
        </Button>
      ) : (
        <Button
          variant="sm"
          className="btn-outline-primary btn-follow px-3"
          onClick={() => userFollow(user.id)}
        >
          <MdAdd />
          Follow
        </Button>
      )}
    </Card>
  );
};

export default UserCard;
