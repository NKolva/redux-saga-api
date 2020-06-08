export type Users = {type: 'FETCH_USERS', payload: string}

export const addUsers = (users:string):Users => ({
    type:'FETCH_USERS',
    payload: users
})

// export const getUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();
//         console.log(users)
//         return addUsers(users);
//     } catch (e) {
//         console.log(e);
//     }
// }