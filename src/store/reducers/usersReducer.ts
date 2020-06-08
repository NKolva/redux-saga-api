export interface UsersState {
    users: string[]
}

const initialState = {
    users: []
}

export const usersReducer = (state:UsersState = initialState, action:any) => {
    switch(action.type){
        case 'FETCH_USERS_DATA':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}