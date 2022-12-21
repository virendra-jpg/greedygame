import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { tableReducer} from "./tableReducer";

const reducers = combineReducers({
    allColumns:tableReducer,
    allApps:appReducer,
});

export default reducers;