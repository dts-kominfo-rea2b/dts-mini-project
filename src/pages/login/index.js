import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'

const defaultValue = {
    email: "",
    password: "",
};

const Login = () => {

    const [input, setInput] = useState(defaultValue)

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

    //Handle input change
    const handleInputChange = (value, type) => {
        setInput({
            ...input,
            [type]: value
        })

        // console.log(value, type)
    };

    //handle submit button
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const sendLoginData = await signInWithEmailAndPassword(auth, input.email, input.password)
            console.log(sendLoginData)
            navigate('/')
        } catch (error) {
            console.log(error)
            // setErrorMessage(error)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='login-email'>
                        <p>Email</p>
                        <input onChange={(event) => handleInputChange(event.target.value, 'email')} type='email' name='login-email'/>
                    </div>
                    <div className='login-pass'>
                        <p>Password</p>
                        <input onChange={(event) => handleInputChange(event.target.value, 'password')} type='password' name='login-password'/>
                    </div>
                    <div className='login-btn'>
                        <p>-------------------------</p>
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <div>{errorMessage}</div>
            </form>
        </div>
    )
}

export default Login