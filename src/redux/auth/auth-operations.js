import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post('/users/signup', credentials);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post('/users/login', credentials);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logout = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

// eslint-disable-next-line
export default { register, login, logout, getCurrentUser };
