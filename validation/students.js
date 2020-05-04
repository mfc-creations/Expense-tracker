const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = function validateStudentInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone number is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
