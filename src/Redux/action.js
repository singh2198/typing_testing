
import * as types from "./action.type"


const add=(payload)=>{
    return {
        type:types.ADD,
        payload
    }
}
const average=(payload)=>{
    return {
        type:types.AVERAGE,
        payload
    }
}

export const addapi=(payload)=>(dispatch)=>{
    dispatch(add(payload))
}

export const averageapi=(payload)=>(dispatch)=>{
    dispatch(average(payload))
}
