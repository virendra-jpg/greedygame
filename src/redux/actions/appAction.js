import { ActionTypes } from "../constants/action-types";

export const setApps=(apps)=>{
    return {
        type:ActionTypes.SET_APPS,
        payload:apps
    }
}