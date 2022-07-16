import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'

const defaultValue = {
    email: "",
    password: "",
};


const Register = () => {
    const [input, setInput] = useState(defaultValue)

    const [errorMessage, setErrorMessage] = useState('')
    
    const navigate = useNavigate();
    
    //Handle input change
    const handleInputChange = (value, type) => {
        setInput({
            ...input,
            [type]: value
        })
    };
    
    //handle submit button
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const registerUser = await createUserWithEmailAndPassword(auth, input.email, input.password)
            console.log(registerUser)
            // navigate('/')
        } catch (error) {
            console.log(error)
        }
    
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='register-email'>
                        <p>Email</p>
                        <input onChange={(event) => handleInputChange(event.target.value, 'email')} type='email' name='register-email'/>
                    </div>
                    <div className='register-pass'>
                        <p>Password</p>
                        <input onChange={(event) => handleInputChange(event.target.value, 'password')} type='password' name='register-password'/>
                    </div>
                    {/* <div className='register-pass-confirm'>
                        <p>Password Confirmation</p>
                        <input onChange={(event) => handleInputChange(event.target.value, 'password')} type='password' name='register-password-confirmation'/>
                    </div> */}
                    <div className='register-btn'>
                        <p>-------------------------</p>
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <div>{errorMessage}</div>
            </form>
        </div>
    )
}

export default Register