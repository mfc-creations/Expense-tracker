const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = function validateProfileInput(data) {
  const errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.room = !isEmpty(data.room) ? data.room : "";
  data.capacity = !isEmpty(data.capacity) ? data.capacity : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
