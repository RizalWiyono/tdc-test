import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/user');
    };

    return (
        <div>
            <div className='header'>
                <canvas className='w-full h-20 md:h-44 bg-gradient'></canvas>
                <div className='bg-white w-fit px-6 md:px-24 py-4 mx-auto mt-[-35px] rounded-full'>
                    <h1 className='text-xl md:text-3xl'>Hi, Welcome to My Test Results 👏</h1>
                </div>
            </div>
            <div className='content text-center mt-32'>
                <p className='text-lg font-light'>Home</p>
                <h2 className='text-2xl'>This is the Home Page</h2>
                <div className='mt-6'>
                    <Button onClick={handleClick} title="Form User" type="button" />
                </div>
            </div>
        </div>
    );
};

export default Home;