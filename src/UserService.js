const UserService = {
    getUser: async (userId) => {
        try {
            const response = await fetch(`https://6566de2d64fcff8d730f2d13.mockapi.io/users/${userId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error; // Rethrow for handling in components
        }
    }
};

export default UserService;
