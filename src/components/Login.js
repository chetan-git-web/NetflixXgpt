import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [toggle, setToggle] = useState(true);

    function toggleSignUp() {
        setToggle(!toggle);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh]'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                    alt=''
                />
            </div>
            <div className='h-screen flex flex-col items-center justify-center'>
                <form className='absolute mt-20 p-14 bg-black w-1/3 bg-opacity-80'>
                    <h1 className='text-white font-bold text-3xl py-4'>
                        {toggle ? 'Sign In' : 'Sign Up'}
                    </h1>
                    {toggle && (
                        <input
                            className='rounded-lg my-4 p-4 w-full bg-gray-700'
                            type='text'
                            placeholder='Name of User'
                        />
                    )}
                    <br />
                    <input
                        className='rounded-lg my-4 p-4 w-full bg-gray-700'
                        type='email'
                        placeholder='Email or Phone Number'
                    />
                    <br />
                    <input
                        className='rounded-lg my-4 p-4 w-full bg-gray-700'
                        type='password'
                        placeholder='Password'
                    />
                    <br />
                    <button className='my-6 p-4 w-full rounded-lg bg-red-600 text-white font-semibold'>
                        {toggle ? 'Sign In' : 'Sign Up'}
                    </button>
                    <input type='checkbox' name='' id='' />
                    <p className='cursor-pointer py-4 text-white' onClick={toggleSignUp}>
                        {toggle
                            ? ' New to Netflix ? Sign Up Now'
                            : 'Already signed up ? Sign Up Now'}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
