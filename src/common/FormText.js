const FormText = ({ name, labelText, value, handleChange,alert }) => {
  return (
    <div  className="form-item">
      <label
     
      htmlFor={name}>{labelText || name}</label>

      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        id={name}
        rows="3"
        
      ></textarea>
      {alert && <p className="alert">{alert}</p>}

    </div>
  );
};


export default FormText;