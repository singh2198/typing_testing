
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

const wpmthre=(payload)=>{
    return{
        type:types.WPMTHR,
        payload
    }
}

const accuthre=(payload)=>{
    return{
        type:types.ACCUTHR,
        payload
    }
}

export const addapi=(payload)=>(dispatch)=>{
    dispatch(add(payload))
}

export const averageapi=(payload)=>(dispatch)=>{
    dispatch(average(payload))
}

export const wpmthreshould=(payload)=>(dispatch)=>{
    dispatch(wpmthre(payload))
}

export const accuthreshould=(payload)=>(dispatch)=>{
    dispatch(accuthre(payload))
}
