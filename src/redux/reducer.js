import { GET } from "./actionTypes";

export const init = {
    countries : null
}

export const reducer = ( state = init , {type, payload}) => {
    switch (type) {
        case GET: return {
            ...state, countries:payload
        }
    
        default:
            return state
    }
}