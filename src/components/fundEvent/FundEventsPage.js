import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FundEventList from './FundEventList';
import {browserHistory,Link} from 'react-router';
import * as fundEventActions from '../../actions/fundEventActions';

class FundEventsPage extends React.Component{
  constructor(props,context){
    super(props,context);
    /*this.state={
      fundEvents:Object.assign([],props.fundEvents)
    };*/
    this.redirectToAddFundEventPage=this.redirectToAddFundEventPage.bind(this);
  }
  componentWillMount(){
    console.log("running loadFundEvents componentWillMount" );
    this.props.actions.loadFundEvents(this.props.id,this.props.employer);
    console.log("this.props",this.props.name);
    //this.setState({fundEvents:Object.assign([],this.props.fundEvents)});
  }
  redirectToAddFundEventPage(){
    browserHistory.push('/employees/'+this.props.employer);
  }
  render(){
    const {fundEvents}=this.props;
    let id=this.props.id;
    let employer=this.props.employer;
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to={"/employees/"+this.props.employer}>Employees</Link></li>
          <li><Link to={"/employee/"+id+"/"+employer}>Employee Details</Link></li>
          <li className="active">Fund Events</li>
        </ol>
        <h1 className="text-capitalize"> Fund Events Of {this.props.name} </h1>
        <input type="submit"
          value="Add Fund Event"
          className="btn btn-primary"
          onClick={this.redirectToAddFundEventPage} />
        <FundEventList fundEvents={fundEvents} />
      </div>
    );
  }
}

FundEventsPage.propTypes={
  fundEvents:PropTypes.array.isRequired,
  id:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  employer:PropTypes.string.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  const id=ownProps.params.id;
  const employer=ownProps.params.employer;
  const name=ownProps.params.name;
  

  return {
    id:id,
    name:name,
    employer:employer,
    fundEvents:state.fundEvents
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(fundEventActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FundEventsPage);