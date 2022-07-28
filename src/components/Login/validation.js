const mailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export default function validation(formData) {
  let errors = {};

  if (!formData.email) {
    errors.email = "*Please enter an email";
  } else if (!mailRegex.test(formData.email)) {
    errors.email = "*Please enter a valid email";
  }

  if (!formData.password) {
    errors.password = "*You must enter your password";
  } else if (!passwordRegex.test(formData.password)) {
    errors.password =
      "*It should have 8 characters, 1 capital letter, and a number";
  }

  return errors;
}
