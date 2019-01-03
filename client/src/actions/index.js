import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, FETCH_TEAMS, FETCH_PLAYERS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
  // return { type: "submit_survey" };
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const submitTeam = (values, history) => async dispatch => {
  const res = await axios.post("/api/teams", values);
  history.push("/teams");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTeams = () => async dispatch => {
  const res = await axios.get("/api/teams");
  dispatch({ type: FETCH_TEAMS, payload: res.data });
};

export const submitPlayer = (values, history) => async dispatch => {
  const res = await axios.post("/api/players", values);
  history.push("/players");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPlayers = () => async dispatch => {
  const res = await axios.get("/api/players");
  dispatch({ type: FETCH_PLAYERS, payload: res.data });
};
