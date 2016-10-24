import React,{PropTypes} from 'react';

const TextInput=({name,label,value,onChange,placeholder,error,type,title,pattern})=>{
  let wrapperClass='form-group form-group-sm';
  if(error && error.length>0){
    wrapperClass+=" " +'has error';
  }
  return (
    <div className={wrapperClass} >
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input 
          type={type}
          name={name}
          required
          className="form-control"
          placeholder={placeholder}
          pattern={pattern}
          title={title}
          value={value}
          onChange={onChange} />
            {error && <div className="alert alert-danger">{error}</div>}
      </div> 
    </div>
  );
};
TextInput.propTypes={
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  value:PropTypes.string,
  error:PropTypes.string,
  type:PropTypes.string.isRequired,
  placeholder:PropTypes.string,
  pattern:PropTypes.string,
  title:PropTypes.string
};
export default TextInput;