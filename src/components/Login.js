import React from 'react';
import TextInput from './TextInput';
import Button from './Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='main flex flex-col p-5'>
            <Link to='/dashboard'>Already Logged in</Link>
            <span>Login</span>
            <div className='flex flex-col p-v-2'>
                <TextInput id='username' placeholder='Username' />
                <TextInput id='password' type='password' placeholder='Password' />
                <Button id='submit' label='Submit' />
            </div>
        </div>
    )
}

export default Login;