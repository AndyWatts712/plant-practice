import * as yup from 'yup'

let schema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required.")
        .min(5, "Username must be at least 5 characters."),
    password: yup
        .string()
        .required('Password is required.')
        .min(8, "Password must be at least 8 characters."),
  });

  export default schema;