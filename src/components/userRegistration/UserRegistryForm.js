import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';

const UserRegistryForm=({registry,onSave,onChange,errors,loading,pwd2onChange})=>{
  return (
    <div className="row">
      <div className="col-md-4">
      </div>
      <div className="col-md-3">
        <form  onSubmit={onSave} >
          <h3>User Registration</h3>
            
            <TextInput
              name="name"
              label="User Name"
              type="text"
              value={registry.name}
              onChange={onChange}
              error={errors.name}
              />
            <TextInput
              name="email"
              label="Email"
              type="email"
              value={registry.email}
              onChange={onChange}
              error={errors.email}
              />
            <TextInput
              name="password1"
              label="Password"
              type="password"
              value={registry.password1}
              onChange={onChange}
              error={errors.password}
              title="Password should be Alphanumeric with special character"
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              /> 
              <TextInput
              name="password2"
              label="Password"
              type="password"
              value={registry.password2}
              onChange={pwd2onChange}
              error={errors.password2}
              ref="password2"
              /> 
            <input
              type="submit"
              disabled={loading}
              value={loading ? 'Saving..':'Save'}
              className="btn btn-primary"
              //onClick={onSave} 
              />       
        </form>
      </div>
    </div>
  );
};
UserRegistryForm.propTypes={
  registry:PropTypes.object.isRequired,
  onSave:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  errors:PropTypes.object.isRequired,
  loading:PropTypes.bool,
  pwd2onChange:PropTypes.func.isRequired
};

export default UserRegistryForm;

