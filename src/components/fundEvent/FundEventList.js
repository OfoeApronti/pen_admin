
import React, {PropTypes} from 'react';
import FundEventListRow from './FundEventListRow';

const FundEventList=({fundEvents})=> {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Period</th>
          <th>Event</th>
          <th>Employer</th>
          <th>Employee</th>
          <th>AVC#</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      {fundEvents.map(event=>
        <FundEventListRow key={event.rowid} event={event} />
        )
      }
      </tbody>    
    </table>
  );
};
FundEventList.propTypes={
  fundEvents:PropTypes.array.isRequired
};
export default FundEventList;