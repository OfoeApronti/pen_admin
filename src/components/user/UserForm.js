import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';

const UserForm=({user,onSave,onChange,loading,errors})=>{
  return (
    <div>
      <ol className="breadcrumb">
        <li><a href="/">Home</a></li>
        <li className="active">User Registry</li>
      </ol>
      <form>
        <h1>User Registry</h1>
          <TextInput
            name="email"
            label="Email"
            value={user.email}
            onChange={onChange}
            error={errors.email}
            />
          <TextInput
            name="name"
            label="Name"
            value={user.name}
            onChange={onChange}
            error={errors.name}
            />
          
          <TextInput
            name="role"
            label="Role"
            value={user.role}
            onChange={onChange}
            error={errors.role}
            />
          <input
            type="submit"
            disabled={loading}
            value={loading ? 'Saving..':'Save'}
            className="btn btn-primary"
            onClick={onSave} />       
      </form>
    </div>
  );
};
UserForm.propTypes={
  user:PropTypes.object.isRequired,
  onSave:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  loading:PropTypes.bool.isRequired,
  errors:PropTypes.object.isRequired
};

export default UserForm;

