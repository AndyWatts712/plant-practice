import React from "react";

export default function Login(props) {
    const {
        values,
        submit,
        inputChange,
        disabled,
        errors
    } = props

    const onInputChange = (evt) => {
        const {name, value} = evt.target
        inputChange(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <div>
                    <input
                        type='text'
                        name='username'
                        value = {values.username}
                        placeholder='username'
                        onChange={onInputChange}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        placeholder='password'
                        onChange={onInputChange}
                    >
                    </input>
                </div>
                <div>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
                <div>
                    <button type="submit" disabled = {disabled}>Login</button>
                </div>
            </form>
        </div>
    )
}