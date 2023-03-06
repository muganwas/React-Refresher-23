import React, { useState, useContext } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [user_id, update_id] = useState();
    const [user_first_name, update_user_first_name] = useState();
    const [user_last_name, update_user_last_name] = useState();
    const { users, addUsers } = useContext(UserContext);

    const changeListener = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const val = e.target.value;
        if (id === 'user_id') {
            update_id(val);
        }
        if (id === 'user_first_name') {
            update_user_first_name(val);
        }
        if (id === 'user_last_name') {
            update_user_last_name(val);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (user_id && user_first_name && user_last_name)
            addUsers({ user_id, user_first_name, user_last_name });
    }

    return (
        <div className='flex flex-col p-5'>
            <span className='flex p-2'>Dashboard</span>
            <Link to='/'>Back</Link>
            <div>
                <TextInput id='user_id' placeholder='User Id' onChange={changeListener} />
                <TextInput id='user_first_name' placeholder='First Name' onChange={changeListener} />
                <TextInput id='user_last_name' placeholder='Last Name' onChange={changeListener} />
                <Button id='submit' action={onSubmit} label='Save' />
            </div>
            <div>
                <span>Users</span>
                <div>{users && users.map((user, i) => {
                    return <span key={i}>{`${user.id} ${user.firstName} ${user.lastName}`}</span>
                })}</div>
            </div>
        </div>
    )
};

export default Dashboard;