import * as types from "./action.type"


const initial={
    str:[],
    average:[]
}


export const typereducer=(state=initial,{type,payload})=>{
    switch(type){
        case types.ADD:{
            return {
                ...state,
                str:payload
            }
        }

        case types.AVERAGE:{
            return{
                ...state,
                average:[...state.average,payload]
            }
        }

        default:
            return state;





      
    }
}