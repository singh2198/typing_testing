import * as types from "./action.type"


const initial={
    str:[],
    key:0
}


export const typereducer=(state=initial,{type,payload})=>{
    switch(type){
        case types.ADD:{
            return {
                ...state,
                str:payload
            }
        }

        default:
            return state;





      
    }
}