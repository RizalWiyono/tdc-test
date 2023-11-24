import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// Components
import Button from '../components/Button/Button';
import InputField from '../components/Form/Input';

const FormUser = () => {
    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL;

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dataUser, setDataUser] = useState([]);
    const [editUser, setEditUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            navigate('/login');
        }
        fetchDataUser()
    }, []);

    const onSubmit = async () => {
        if (!email || !name) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter both email and name.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            const confirmResult = await Swal.fire({
                title: 'Confirmation',
                text: 'Are you sure you want to insert user?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            });

            if (confirmResult.isConfirmed) {
                try {
                    const token = localStorage.getItem('access_token');
                    const response = await axios.post(`${API_URL}/api/v1/users`, { email, name }, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    Swal.fire({
                        title: 'Success!',
                        text: 'Insert user successful.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });

                    fetchDataUser();
                    setEmail('');
                    setName('');
                } catch (error) {
                    if (error.response) {
                        const errorMessage = error.response.data.message || 'Insert user failed. Please try again.';

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
        }
    };

    const onEdit = async (data) => {
        if (isEdit) {
            try {
                const { id, email, name } = editUser;
                const token = localStorage.getItem('access_token');
                await axios.put(`${API_URL}/api/v1/users/${id}`, { email, name }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                Swal.fire({
                    title: 'Success!',
                    text: 'Updated user successful.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                fetchDataUser();
                setEditUser({});
                setIsEdit(false);
            } catch (error) {
                if (error.response) {
                    const errorMessage = error.response.data.message || 'Updated user failed. Please try again.';

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
        } else {
            setEditUser(data);
            setIsEdit(true);
        }
    }

    const onDelete = async (id) => {
        const confirmResult = await Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to delete user?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        });

        if (confirmResult.isConfirmed) {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.delete(`${API_URL}/api/v1/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                Swal.fire({
                    title: 'Success!',
                    text: 'Delete user successful.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                fetchDataUser();
            } catch (error) {
                if (error.response) {
                    const errorMessage = error.response.data.message || 'Delete user failed. Please try again.';

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
    }

    const fetchDataUser = async () => {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`${API_URL}/api/v1/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setDataUser(response.data.data);
    }

    return (
        <div>
            <Modal open={isEdit} onClose={() => setIsEdit(false)} center classNames="w-50" styles={{ modal: { width: '50%', borderRadius: '16px' } }}>
                <h1 className='text-2xl font-medium'>
                    Edit User
                </h1>

                <div className='mt-6'>
                    <div>
                        <InputField
                            type="text"
                            title="Name"
                            value={editUser.name || ''}
                            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                        />
                    </div>
                    <div className='mt-4'>
                        <InputField
                            type="email"
                            title="Email"
                            value={editUser.email || ''}
                            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                        />
                    </div>
                    <div className='flex justify-end mt-6'>
                        <Button onClick={onEdit} title="Submit" type="button" />
                    </div>
                </div>
            </Modal>

            <div className='header'>
                <canvas className='w-full h-20 md:h-44 bg-gradient'></canvas>
                <div className='bg-white w-fit px-6 md:px-24 py-4 mx-auto mt-[-35px] rounded-full'>
                    <h1 className='text-xl md:text-3xl'>Form User</h1>
                </div>
            </div>
            <div className='content text-left px-10 md:px-20 mt-10 md:mt-32'>
                <p className='text-lg font-light'>Form User</p>
                <h2 className='text-2xl'>Enter the details of the user you want to register with the system.</h2>

                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 p-4 mt-6 bg-white rounded-3xl md:rounded-full'>
                    <div className='col-span-1 md:col-span-2'>
                        <InputField
                            type="text"
                            title="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='col-span-1 md:col-span-2'>
                        <InputField
                            type="email"
                            title="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <Button onClick={onSubmit} title="Submit" type="button" />
                </div>

                <div className='p-4 bg-white rounded-3xl mt-6 overflow-x-auto'>
    <table className='w-full table-auto'>
        <thead>
            <tr>
                <th className='p-4'>
                    No.
                </th>
                <th className='border-l border-l-[#808080] p-4'>
                    Name
                </th>
                <th className='border-l border-l-[#808080] p-4'>
                    Email
                </th>
                <th className='border-l border-l-[#808080] p-4'>
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {dataUser?.map((user, index) => (
                <tr key={user.id}>
                    <td className='border-t border-t-[#808080] p-4'>{index + 1}</td>
                    <td className='border-l border-l-[#808080] border-t border-t-[#808080] p-4'>{user.name}</td>
                    <td className='border-l border-l-[#808080] border-t border-t-[#808080] p-4'>{user.email}</td>
                    <td className='border-l border-l-[#808080] border-t border-t-[#808080] p-4'>
                        <div className='flex gap-2'>
                            <Button onClick={() => onEdit(user)} title="Edit" type="button" />
                            <Button onClick={() => onDelete(user.id)} title="Delete" type="button-secodary" />
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

            </div>
        </div>
    );
};

export default FormUser;