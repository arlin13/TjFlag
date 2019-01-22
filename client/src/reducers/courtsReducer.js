import { FETCH_COURTS, FETCH_COURT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COURTS:
      return action.payload;
    case FETCH_COURT:
      return action.payload;
    default:
      return state;
  }
}
