import React, {PropTypes} from 'react';
import ClientListRow from './ClientListRow';

const ClientList=({clients})=> {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact Email</th>
          <th>Contact Phone</th>
          <th>RM</th>
          <th>Init Date</th>
          <th>Fund Type</th>
        </tr>
      </thead>
      <tbody>
      {clients.map(client=>
        <ClientListRow key={client.id} client={client} />
        )
      }
      </tbody>    
    </table>
  );
};
ClientList.propTypes={
  clients:PropTypes.array.isRequired
};
export default ClientList;