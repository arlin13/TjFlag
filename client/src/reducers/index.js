import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";
import teamsReducer from "./teamsReducer";
import playersReducer from "./playersReducer";
import courtsReducer from "./courtsReducer";
import tournamentsReducer from "./tournamentsReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  teams: teamsReducer,
  players: playersReducer,
  courts: courtsReducer,
  tournaments: tournamentsReducer
});
