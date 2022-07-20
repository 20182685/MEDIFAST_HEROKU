import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormInput = ({label, type, name, onChange}) => {
  return (
    <div className='row mt-2 mb-4'>
      <label className='col-sm-3 col-form-label' htmlFor='{label} '>{label}</label>
      <div className='col-sm-9'>
        <input onChange={onChange} name={name} type={type} className='form-control' id={label}/>
      </div>
    </div>
  );
}

export default FormInput;