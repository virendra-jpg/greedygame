import { ActionTypes } from "../constants/action-types";

const initialState = {
  apps: [],
};
export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_APPS:
        return { ...state, apps: payload };
      default:
        return state;
    }
};