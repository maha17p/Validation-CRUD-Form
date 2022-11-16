import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  FormCheckBox,
  FormInput,
  FormRadio,
  FormSelect,
  FormText,
} from "../common";
import {
  clearValues,
  editTabaleData,
  handleChange,
  submit,
  submitData,
} from "../feature/formSlice";
import { validateError } from "../utils/validateError";

const FormValidation = () => {
  const [isError, setIsError] = useState({});
  const {
    id,
    address,
    comments,
    dateOfBirth,
    gender,
    genderList,
    name,
    otherSkills,
    role,
    roleList,
    skill,
    skillList,
    isSubmit,
    isEdit,
  } = useSelector((store) => store.formValidationReducer);

  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const checkbox = [...skill];

  const checkboxChangeHandler = (e) => {
    const { name, value } = e.target;
    const currIndex = checkbox.indexOf(value);
    if (currIndex === -1) {
      checkbox.push(value);
    } else {
      checkbox.splice(currIndex, 1);
    }
    dispatch(handleChange({ name, value: checkbox }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsError(
      validateError({
        name,
        comments,
        dateOfBirth,
        gender,
        otherSkills,
        role,
        skill,
        address,
      })
    );
    dispatch(submit());
  };

  useEffect(() => {
    if (Object.keys(isError).length === 0 && isSubmit) {
      const formData = {
        id: id ? id : uuid(),
        name,
        comments,
        dateOfBirth,
        gender,
        otherSkills,
        role,
        skill,
        address,
      };
      if (isEdit) {
        dispatch(editTabaleData(formData));
        dispatch(clearValues());

        return;
      }
      dispatch(submitData(formData));
      dispatch(clearValues());
    }
  }, [isError, isSubmit, isEdit]);

  return (
    <div className="form-wrapper">
        <p className="title">User Form</p>

      <form className="form" onSubmit={submitHandler}>
        <FormInput
          name={"name"}
          type={"text"}
          value={name}
          handleChange={changeHandler}
          alert={isError["name"]}
        />
        <FormInput
          name={"dateOfBirth"}
          labelText={"Date of birth"}
          type={"date"}
          value={dateOfBirth}
          handleChange={changeHandler}
          alert={isError["dateOfBirth"]}
        />
        <FormRadio
          name={"gender"}
          type={"radio"}
          value={gender}
          listOfItems={genderList}
          handleChange={changeHandler}
          alert={isError["gender"]}
        />
      
        <FormCheckBox
          name={"skill"}
          type={"checkbox"}
          value={skill}
          listOfItems={skillList}
          handleChange={checkboxChangeHandler}
          alert={isError["skill"]}
        />
        <FormSelect
          name={"role"}
          value={role}
          listOfItems={roleList}
          handleChange={changeHandler}
          alert={isError["role"]}
        />
        <FormText
          name={"address"}
          value={address}
          handleChange={changeHandler}
          alert={isError["address"]}
        />
        <FormText
          name={"comments"}
          value={comments}
          handleChange={changeHandler}
          alert={isError["comments"]}
        />
        <FormText
          name={"otherSkills"}
          labelText={"other skills"}
          value={otherSkills}
          handleChange={changeHandler}
          alert={isError["otherSkills"]}
        />
        <button className="submit" type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
