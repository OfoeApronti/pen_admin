import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';

const ClientForm=({client,onSave,onChange,loading,errors,visitEmployees})=>{
  return (
    <form>
      <ol className="breadcrumb">
        <li><a href="/">Home</a></li>
        <li><a href="/clients">Clients</a></li>
        <li className="active">Client Details</li>
      </ol>
      <h1>Manage client</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-info"> 
                <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>&nbsp;Fund Events
              </button>
              <button type="button" className="btn btn-success ">
                <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>&nbsp;Share Interest
              </button>
              <button type="button" className="btn btn-default btn-danger">
                <span className="glyphicon glyphicon-signal " aria-hidden="true"></span>&nbsp;Liquidate
              </button>
              <button type="button" className="btn btn-primary">
                <span className="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span>&nbsp;Load Contribution
              </button>
              <button type="button" className="btn btn-info" onClick={visitEmployees} >
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;Employees
              </button>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-2">
            <TextInput
              name="id"
              label="Client Code"
              value={client.id}
              onChange={onChange}
              error={errors.id}
              />
          </div>
          <div className="col-md-6">
            <TextInput
              name="name"
              label="Name"
              value={client.name}
              onChange={onChange}
              error={errors.name}
              />
          </div>
        </div>
      <TextInput
        name="address"
        label="Address"
        value={client.address}
        onChange={onChange}
        error={errors.address}
        />
    <div className="row">
      <div className="col-md-4 col-ms-12">
        <TextInput
            name="email"
            label="Email"
            value={client.email}
            onChange={onChange}
            error={errors.email}
            />
      </div>
      <div className="col-md-4 col-ms-12">
        <TextInput
            name="phone"
            label="Phone"
            value={client.phone}
            onChange={onChange}
            error={errors.phone}
            />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-ms-12">
            <TextInput
              name="rm"
              label="Relation Manager"
              value={client.rm}
              onChange={onChange}
              error={errors.rm}
              />
            </div>
        <div className="col-md-4 col-ms-12"> 
            <TextInput
                name="initDate"
                label="Initiation Date"
                value={client.initDate}
                onChange={onChange}
                error={errors.initDate}
                />
        </div>
          <div className="col-md-4 col-ms-12">
            <TextInput
                name="fundType"
                label="Fund Type"
                value={client.fundType}
                onChange={onChange}
                error={errors.fundType}
                />
          </div>
        </div>
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving..':'Save'}
        className="btn btn-primary"
        onClick={onSave} />       
    </form>
  );
};
ClientForm.propTypes={
  client:PropTypes.object.isRequired,
  onSave:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  loading:PropTypes.bool.isRequired,
  errors:PropTypes.object.isRequired,
  visitEmployees:PropTypes.func.isRequired
};

export default ClientForm;

