import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import {Link,IndexLink} from 'react-router';

const LoginForm=({login,onLogin,onChange,errors,loading})=>{
  return (
    <div className="row">
      <div className="col-md-4 col-xs-4">
      </div>
      <div className="col-md-3 col-xs-3">
        <form>
          <h3>User Login</h3>
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
              <div className="row form-group ">
                <div className="col-xs-3">
                  <input
                  type="submit"
                  disabled={loading}
                  value="Login"
                  className="btn btn-primary"
                  onClick={onLogin} />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 form-group">
                  <label> New User ?  <Link to="/register"> Create Account </Link> </label>
                </div>
              </div>
        </form>
      </div>
      <div className="col-md-4 col-xs-4">
      </div>
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

