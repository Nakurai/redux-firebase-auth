import { ACTION_TYPES as APP_ACTION_TYPES, actions as app } from "./app.action";
import {
  ACTION_TYPES as MAGIC_ACTION_TYPES,
  actions as magic,
} from "./magic.action";
import {
  ACTION_TYPES as AUTH_ACTION_TYPES,
  actions as auth,
} from "./auth.action";

export const ACTION_TYPES = {
  ...AUTH_ACTION_TYPES,
  ...APP_ACTION_TYPES,
  ...MAGIC_ACTION_TYPES,
};

export default { app, magic, auth };
