import React from 'react'

const FormInput = ({name,labelText,type,value,handleChange,alert}) => {
  return (
    <div className="form-item">
        <label  htmlFor={name}>{labelText || name}</label>
        <input id={name} name={name} type={type} value={value} onChange={handleChange} />
        {alert && <p className='alert'>{alert}</p>}
    </div>
  )
}

export default FormInput