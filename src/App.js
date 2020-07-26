import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login'
import * as yup from 'yup'
import schema from './validation/formSchema'

function App() {
  const initialFormValues = {
    username: "",
    password: ""
  }
  const initialFormErrors = {
    username: "",
    password: ""
  }
  const initialUserValue = []
  const initialDisabled = true

  const [users, setUser] = useState(initialUserValue)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)



  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const postNewUser = (newUser) => {
    setUser([newUser, ...users])
    setFormValues(initialFormValues)
  }
  
  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser)
  }
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    }, [formValues])
  })
  return (
    <div className="App">
      <Login
        submit={submit}
        values={formValues} 
        errors = {formErrors}
        inputChange = {inputChange}
        disabled = {disabled}
        />
    </div>
  );
}

export default App;
