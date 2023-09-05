import { types } from "../types/types";

export const authreducer=(state={},action)=>{

    switch (action.type) {
        case types.Login:
        return{
            ...state,
            logged:true,
            user:'Oscar Mora'
        };
        case types.Logout:
        return{
            logged:false,
        };
          
    
        default:
            return state;
    }



}
