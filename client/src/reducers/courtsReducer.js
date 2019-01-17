import { FETCH_COURTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COURTS:
      return action.payload;
    default:
      return state;
  }
}
