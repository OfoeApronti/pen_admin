
import React, {PropTypes} from 'react';
import UserListRow from './UserListRow';

const UserList=({users})=> {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Email</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user=>
        <UserListRow key={user.email} user={user} />
        )
      }
      </tbody>    
    </table>
  );
};
UserList.propTypes={
  users:PropTypes.array.isRequired
};
export default UserList;