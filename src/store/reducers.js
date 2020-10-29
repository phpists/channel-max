import { combineReducers } from "redux";
import authorization from './authorization'
import common from './common'
import profile from './profile'

// Front
import Layout from "./layout/reducer";

const rootReducer = combineReducers({
  Layout,
  
  authorization,
  profile,
  common,
});

export default rootReducer;
