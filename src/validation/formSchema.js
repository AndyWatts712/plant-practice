import * as yup from 'yup'

let schema = yup.object().shape({
    email: yup
        .string()
        .email('Must provide valid email address')
        .required("Email is required.")
        .min(5, "Email must be at least 5 characters."),
    password: yup
        .string()
        .required('Password is required.')
        .min(8, "Password must be at least 8 characters."),
  });

  export default schema;