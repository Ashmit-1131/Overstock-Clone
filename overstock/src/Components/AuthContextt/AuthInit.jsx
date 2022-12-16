export const login={type:"LOGIN"};
export const create={type:"CREATE"};

export function AuthInit(state,action){
    switch(action.type){
        case "LOGIN":return
        ({...state,isAuth:true})
        case "CREATE" : return
        ({...state,...action.payload})
        default :return state
    }
}