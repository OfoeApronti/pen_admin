import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow=({user})=>{
  return (
    <tr>
      <td><Link to={'/user/'+user.email}>Details</Link></td>
      <td>{user.email}</td>
      <td>{user.name}</td>
      <td>{user.role}</td>
    </tr>
  );
};
UserListRow.propTypes={
  user:PropTypes.object.isRequired
};
export default UserListRow;