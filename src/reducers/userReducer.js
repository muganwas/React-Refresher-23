const defaultUsers = [
    { id: '12e43', firstName: 'Steven', lastName: 'Muganwa ' }
];

function userReducer(users, action) {
    switch (action.type) {
        case 'new': {
            return [...users, {
                id: action.id,
                firstName: action.firstName,
                lastName: action.lastName
            }]
        }
        case 'update': {
            return users.map(user => {
                if (user.id === action.user.id) {
                    return action.user
                }
                return user;
            })
        }
        case 'delete': {
            return users.filter(user => user.id === action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

module.exports = {
    userReducer,
    defaultUsers
}