import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ClientList from './ClientList';
import {browserHistory} from 'react-router';

class ClientsPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.redirectToAddClientPage=this.redirectToAddClientPage.bind(this);
  }
  redirectToAddClientPage(){
    browserHistory.push('/client');
  }
  render(){
    const {clients}=this.props;
    return (
      <div>
        <h1> Clients </h1>

        <div className="row">  
          <div className="col-md-6">
            <input type="submit"
              value="Add Client"
              className="btn btn-primary"
              onClick={this.redirectToAddClientPage} />
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for client..."></input>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
      </div>

        <ClientList clients={clients} />
      </div>
    );
  }
}
ClientsPage.propTypes={
  clients:PropTypes.array.isRequired
};
function mapStateToProps(state,ownProps){
  return {
    clients:state.clients
  };
}

export default connect(mapStateToProps)(ClientsPage);