import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';

const LoginForm=({login,onLogin,onChange,errors})=>{
  return (
    <div>
      <form>
        <h1>Login</h1>
          <TextInput
            name="email"
            label="Email"
            type="text"
            value={login.email}
            onChange={onChange}
            error={errors.email}
            />
           <TextInput
            name="password"
            label="Password"
            type="password"
            value={login.password}
            onChange={onChange}
            error={errors.password}
            />
          <input
            type="submit"
            disabled={loading}
            value={loading ? 'Saving..':'Save'}
            className="btn btn-primary"
            onClick={onLogin} />       
      </form>
    </div>
  );
};
LoginForm.propTypes={
  login:PropTypes.object.isRequired,
  onLogin:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  errors:PropTypes.object.isRequired
};

export default LoginForm;

