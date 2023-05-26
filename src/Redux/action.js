
import * as types from "./action.type"


const add=(payload)=>{
    return {
        type:types.ADD,
        payload
    }
}

export const addapi=(payload)=>(dispatch)=>{
    dispatch(add(payload))
}
