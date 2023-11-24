import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

// Components
import Button from '../components/Button/Button';
import InputField from '../components/Form/Input';

const Login = () => {
    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        if (!email || !password) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter both email and password.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            try {
                const response = await axios.post(
                    `${API_URL}/api/v1/login`,
                    { email, password }
                );

                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                localStorage.setItem('access_token', response.data.data.access_token);
                navigate('/user');
            } catch (error) {
                if (error.response) {
                    const errorMessage = error.response.data.message || 'Login failed. Please try again.';

                    Swal.fire({
                        title: 'Error!',
                        text: errorMessage,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'An error occurred. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }

            }
        }
    };

    return (
        <div>
            <div className='header'>
                <canvas className='w-full h-64 md:h-80 bg-gradient'></canvas>
                <div className='bg-white w-fit px-10 md:px-16 py-8 md:py-10 w-[60%] mx-auto mt-[-155px] rounded-3xl'>
                    <h1 className='text-3xl'>Login</h1>
                    <p className='text-lg font-light'>Enter your details to log into your account</p>

                    <div className='mt-10'>
                        <div className='mb-4'>
                            <InputField
                                type="email"
                                title="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <InputField
                                type="password"
                                title="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex justify-end mt-8'>
                            <Button onClick={onLogin} title="Login" type="button" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;