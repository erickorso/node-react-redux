import get from "lodash/get";
import { createSelector } from "reselect";

export const getUsers = store => get(store, "usersFetch.users", []);

export const countUsers = createSelector(getUsers, users => users.length);
