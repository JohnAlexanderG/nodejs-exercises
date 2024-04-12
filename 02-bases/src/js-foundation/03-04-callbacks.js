const users = [
    {
        id: 1,
        name: 'jane doe'
    },
    {
        id: 2,
        name: 'jon doe'
    },
];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    return !user
        ? callback(`User not found with ${id}`)
        : callback(null, user);
}

module.exports = {
    getUserById
}