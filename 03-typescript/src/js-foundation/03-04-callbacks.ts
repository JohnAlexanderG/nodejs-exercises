interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'jane doe'
    },
    {
        id: 2,
        name: 'jon doe'
    },
];

interface GetUserByIdProps {
    id: number;
    callback: (err?: string, user?:User) => void;
}

export const getUserById = ({id, callback}: GetUserByIdProps) => {
    const user = users.find((user) => user.id === id);

    if(!user) {
        setTimeout(() => {
            callback(`User not found with ${id}`)
        }, 2500);
        return;
    }

    return callback(undefined, user);

//     return !user
//         \? callback(`User not found with ${id}`)
//         : callback(undefined, user);
}
