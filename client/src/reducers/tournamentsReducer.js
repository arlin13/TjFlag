import { FETCH_TOURNAMENTS, FETCH_TOURNAMENT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TOURNAMENTS:
      return action.payload;
    case FETCH_TOURNAMENT:
      return action.payload;
    default:
      return state;
  }
}
