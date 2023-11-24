import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));

    useEffect(() => {
        const updateAccessToken = () => {
            setAccessToken(localStorage.getItem('access_token'));
        };
        const interval = setInterval(updateAccessToken, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <nav className="bg-white text-black">
            <div className="px-10 md:px-20 py-4 flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link className="hover:border-b-[1.5px] font-normal text-lg hover:border-b-black" to="/">Home</Link>
                    </li>
                    <li>
                        {accessToken ? (
                            <Link className="hover:border-b-[1.5px] font-normal text-lg hover:border-b-black" to="/user">
                                User
                            </Link>
                        ) : (
                            <Link className="hover:border-b-[1.5px] font-normal text-lg hover:border-b-black" to="/login">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
                <Link className="text-xl font-bold" to="/">
                    <img src='https://thedigitalcellar.com/wp-content/uploads/2020/07/tdc_logo.png' className='w-10' alt='Logo' />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
