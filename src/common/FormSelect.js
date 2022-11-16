import React from "react";

const FormSelect = ({ name, value, listOfItems, handleChange, alert }) => {
  return (
    <div className="form-item">
      <label htmlFor={name}>{name}</label>
      <select name={name} id={name} value={value} onChange={handleChange}>
        <option  value="select">Select a language</option>
        {listOfItems.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {alert && <p className="alert">{alert}</p>}
    </div>
  );
};

export default FormSelect;
