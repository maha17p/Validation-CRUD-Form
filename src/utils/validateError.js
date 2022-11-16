export const validateError = ({
  name,
  dateOfBirth,
  gender,
  role,
  skill,
  address,
}) => {
  const error = {};
  if (!name) {
    error.name = "Name is required";
  }
  if (!dateOfBirth) {
    error.dateOfBirth = "Date of birth is required";
  }
  if (!gender) {
    error.gender = "Gender is required";
  }
  if (!role) {
    error.role = "Role is required";
  }
  if(!skill) {
    error.skill = "Skill is required";
  }
  if (!address) {
    error.address = "Address is required";
  }

  return error;
};
