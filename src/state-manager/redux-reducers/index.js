import { combineReducers } from "redux";

import app from "./app.reducer";
import magic from "./magic.reducer";
import auth from "./auth.reducer";

export default combineReducers({ app, magic, auth });
