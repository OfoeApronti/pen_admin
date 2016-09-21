import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';

const EmployeeForm=({employee,onSave,onChange,loading,errors,fundEvents})=>{
  return (
    <form>
      <h1 className="text-capitalize">{employee.name}</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-info" onClick={fundEvents}> 
                <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>&nbsp;Fund Events
              </button>
              <button type="button" className="btn btn-danger">
                <span className="glyphicon glyphicon-signal" aria-hidden="true"></span>&nbsp;Liquidate
              </button>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-2">
            <TextInput
              name="id"
              label="employee Id"
              value={employee.id}
              onChange={onChange}
              error={errors.id}
              />
          </div>
          <div className="col-md-6">
            <TextInput
              name="name"
              label="Name"
              value={employee.name}
              onChange={onChange}
              error={errors.name}
              />
          </div>
        </div>
      <TextInput
        name="employer"
        label="Employer"
        value={employee.employer}
        onChange={onChange}
        error={errors.employer}
        />
    <div className="row">
      <div className="col-md-4 col-ms-12">
        <TextInput
            name="nok"
            label="Next Of Kin"
            value={employee.nok}
            onChange={onChange}
            error={errors.nok}
            />
      </div>
      <div className="col-md-4 col-ms-12">
            <TextInput
              name="ssnit"
              label="SSNIT #"
              value={employee.ssnit}
              onChange={onChange}
              error={errors.ssnit}
              />
        </div>
        <div className="col-md-4 col-ms-12">
        <TextInput
            name="dob"
            label="Date Of Birth"
            value={employee.dob}
            onChange={onChange}
            error={errors.dob}
            />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-ms-12">
            <TextInput
                name="phone"
                label="Phone"
                value={employee.phone}
                onChange={onChange}
                error={errors.phone}
                />
          </div>
          <div className="col-md-4 col-ms-12">
            <TextInput
                name="email"
                label="Email"
                value={employee.email}
                onChange={onChange}
                error={errors.email}
                />
        </div>
        
        <div className="col-md-4 col-ms-12"> 
            <TextInput
                name="initDate"
                label="Initiation Date"
                value={employee.initDate}
                onChange={onChange}
                error={errors.initDate}
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
EmployeeForm.propTypes={
  employee:PropTypes.object.isRequired,
  onSave:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  fundEvents:PropTypes.func.isRequired,
  loading:PropTypes.bool.isRequired,
  errors:PropTypes.object.isRequired
};

export default EmployeeForm;

