import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const ClientListRow=({client})=>{
  return (
    <tr>
      <td><Link to={'/client/'+client.id}>Details</Link></td>
      <td>{client.name}</td>
      <td>{client.address}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>{client.rm}</td>
      <td>{client.initDate}</td>
      <td>{client.fundType}</td>
    </tr>
  );
};
ClientListRow.propTypes={
  client:PropTypes.object.isRequired
};
export default ClientListRow;