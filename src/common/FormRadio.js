import React from "react";

const FormRadio = ({ name, type, value, listOfItems, handleChange, alert }) => {
  return (
    <div className="form-item">
      <label htmlFor={name}>{name}</label>
      <ul>
        {listOfItems.map((item, index) => (
          <li key={index}>
            <input
              id={`${name}-${index}`}
              name={name}
              checked={item === value}
              type={type}
              value={item}
              onChange={handleChange}
            />
            <label htmlFor={`${name}-${index}`}>{item}</label>
          </li>
        ))}
      </ul>
      {alert && <p className="alert">{alert}</p>}
    </div>
  );
};

export default FormRadio;
