import { FETCH_TEAMS, FETCH_TEAMS_BASIC, FETCH_TEAM } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return action.payload;
    case FETCH_TEAMS_BASIC:
      return action.payload;
    case FETCH_TEAM:
      return action.payload;
    default:
      return state;
  }
}
