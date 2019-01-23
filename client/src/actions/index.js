import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_TEAMS,
  FETCH_TEAM,
  FETCH_PLAYERS,
  FETCH_PLAYERS_BASIC,
  FETCH_PLAYER,
  FETCH_COURTS,
  FETCH_COURT,
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENT
} from "./types";

// USER
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// TOKEN
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// SURVEY
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

// TEAM
export const submitTeam = (values, history) => async dispatch => {
  const res = await axios.post("/api/teams", values);
  history.push("/teams");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTeams = () => async dispatch => {
  const res = await axios.get("/api/teams");
  dispatch({ type: FETCH_TEAMS, payload: res.data });
};

export const fetchTeam = teamId => async dispatch => {
  const res = await axios.get("/api/team?teamId=" + teamId);
  dispatch({ type: FETCH_TEAM, payload: res.data });
};

// PLAYER
export const submitPlayer = (values, history) => async dispatch => {
  const res = await axios.post("/api/players", values);
  history.push("/players");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPlayers = () => async dispatch => {
  const res = await axios.get("/api/players");
  dispatch({ type: FETCH_PLAYERS, payload: res.data });
};

export const fetchPlayersBasic = () => async dispatch => {
  const res = await axios.get("/api/playersbasic");
  dispatch({ type: FETCH_PLAYERS_BASIC, payload: res.data });
};

export const fetchPlayer = playerId => async dispatch => {
  const res = await axios.get("/api/player?playerId=" + playerId);
  dispatch({ type: FETCH_PLAYER, payload: res.data });
};

// COURT
export const submitCourt = (values, history) => async dispatch => {
  const res = await axios.post("/api/courts", values);
  history.push("/courts");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCourts = () => async dispatch => {
  const res = await axios.get("/api/courts");
  dispatch({ type: FETCH_COURTS, payload: res.data });
};

export const fetchCourt = courtId => async dispatch => {
  const res = await axios.get("/api/court?courtId=" + courtId);
  dispatch({ type: FETCH_COURT, payload: res.data });
};

// TOURNAMENT
export const submitTournament = (values, history) => async dispatch => {
  const res = await axios.post("/api/tournaments", values);
  history.push("/tournaments");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTournaments = () => async dispatch => {
  const res = await axios.get("/api/tournaments");
  dispatch({ type: FETCH_TOURNAMENTS, payload: res.data });
};

export const fetchTournament = tournamentId => async dispatch => {
  const res = await axios.get("/api/tournament?tournamentId=" + tournamentId);
  dispatch({ type: FETCH_TOURNAMENT, payload: res.data });
};
