import axios from 'axios';
import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';

export const loadRepos = username => async dispatch => {
  dispatch({ type: LOAD_REPOS });
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    const { data: repos } = await axios.get(requestURL);

    return dispatch({ type: LOAD_REPOS_SUCCESS, repos, username });
  } catch (e) {
    return dispatch({ type: LOAD_REPOS_ERROR, error: e });
  }
};
