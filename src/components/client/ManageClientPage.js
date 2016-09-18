import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as clientActions from '../../actions/clientActions';
import ClientForm from './ClientForm';

class ManageClientPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      client:Object.assign({},props.client),
      errors:{}
    };
    this.updateClientState=this.updateClientState.bind(this);
    this.saveClient=this.saveClient.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.client.id!=nextProps.client.id){
      this.setState({client:Object.assign({},nextProps.client)});
    }
  }
  updateClientState(event){
    const field=event.target.name;
    let client=this.state.client;
    client[field]=event.target.value;
    return this.setState({client:client});
  }
  saveClient(event){
    event.preventDefault();
    this.props.actions.saveClient(this.state.client);
    this.context.router.push('/clients');
  }
  render(){
    return(
      <div>
        

        <ClientForm 
        client={this.state.client}
        onChange={this.updateClientState}
        onSave={this.saveClient}
        errors={this.state.errors}
        />
      </div>
    );
  }
}

function getClientById(clients,clientId){
  const client=clients.filter(client=>client.id==clientId);
  if (client){
    return client[0];
  }
  return null;
  
}

function mapStateToProps(state,ownProps){
  const clientId=ownProps.params.id;
  let client={id:"",name:"",address:"",email:"",phone:"",rm:"",initDate:"",fundType:""};
  if (clientId && state.clients.length>0){
    client=getClientById(state.clients,clientId);
  }
  return {
    client:client
  };
}
ManageClientPage.propTypes={
    client:PropTypes.object.isRequired,
    actions:PropTypes.object.isRequired
};
ManageClientPage.contextTypes={
  router:PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(clientActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageClientPage);