import { combineReducers, createStore} from "redux";
import getUserDataReducer from "./reducer/userReducer";
import reportReducer from "./reducer/reportReducer";

const rootReducer = combineReducers({
  user: getUserDataReducer,
  report : reportReducer,

});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
