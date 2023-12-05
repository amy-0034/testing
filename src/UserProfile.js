import React, { useEffect, useState } from 'react';
import UserService from './UserService'; // This service fetches user data

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        UserService.getUser(userId).then(setUser);
    }, [userId]);

    if (!user) return <div>Loading...</div>;
    return <div>Welcome, {user.name}!</div>;
};

export default UserProfile;
