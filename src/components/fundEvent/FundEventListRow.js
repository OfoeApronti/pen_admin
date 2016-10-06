import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const FundEventsListRow=({event})=>{
  return (
    <tr>
      <td><Link to={'/fundEvents/'+event.id+'/'+event.employer+'/'+event.events}>Details</Link></td>
      <td>{event.period}</td>
      <td>{event.event}</td>
      <td>{event.employer_amt}</td>
      <td>{event.employee_amt}</td>
      <td>{event.avc}</td>
      <td>{event.total}</td>
    </tr>
  );
};
FundEventsListRow.propTypes={
  event:PropTypes.object.isRequired
};
export default FundEventsListRow;