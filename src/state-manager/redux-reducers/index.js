import { combineReducers } from "redux";

import app from "./app.reducer";
import magic from "./magic.reducer";

export default combineReducers({ app, magic });
