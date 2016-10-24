import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserList from './UserList';
import {browserHistory,Link} from 'react-router';
import * as userActions from '../../actions/userActions';

class UsersPage extends React.Component{
  constructor(props,context){
    super(props,context);
    /*this.state={
      users:Object.assign([],props.users)
    };*/
  }
  componentWillMount(){
    this.props.actions.loadUsers();
    //this.setState({users:Object.assign([],this.props.users)});
  }

  render(){
    const {users}=this.props;
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Users</li>
        </ol>
        <h1 className="text-capitalize"> Users </h1>
        <UserList users={users} />
      </div>
    );
  }
}

UsersPage.propTypes={
  users:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  return {
    users:state.users
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(userActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersPage);