import { combineReducers } from "redux";
import authorization from './authorization'
import common from './common'

// Front
import Layout from "./layout/reducer";

const rootReducer = combineReducers({
  Layout,
  
  authorization,
  common,
});

export default rootReducer;
