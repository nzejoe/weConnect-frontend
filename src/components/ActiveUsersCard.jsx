import React, { useContext } from "react";

// store context
import { UsersContext } from '../store/users-context'

import { UserCard } from ".";

const ActiveUsersCard = () => {
  const { userList } = useContext(UsersContext);

  return (
    <div className="active-users mt-3">
      <div className="header">
        <h6 className="text-dark">Follow People</h6>
      </div>
      <div className="body">
        <div className="card-wrapper">
          {userList && userList.slice(0,10).map(user=>{
            return <UserCard key={user.id} user={user}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersCard;
