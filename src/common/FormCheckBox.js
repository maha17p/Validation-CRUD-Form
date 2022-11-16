const FormCheckBox = ({
  name,
  value,
  type,
  listOfItems,
  handleChange,
  alert,
}) => {
  return (
    <div className="form-item">
      <label htmlFor={name}>{name}</label>
      <ul>
        {listOfItems.map((item, index) => (
          <li key={index}>
            <input
              id={`${name}-${index}`}
              name={name}
              type={type}
              value={item}
              checked={item === value[index]}
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

export default FormCheckBox;
