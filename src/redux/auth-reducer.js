import { authAPI } from "../api/api";
const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        //isAuth: action.isAuth,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const getAuthUserData = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  authAPI.getMe().then((response) => {
    dispatch(toggleIsFetching(false));
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  authAPI.login(email, password, rememberMe).then((response) => {
    dispatch(toggleIsFetching(false));
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.logout().then((response) => {
      dispatch(toggleIsFetching(false));
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(getAuthUserData());
      }
    });
  };

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReducer;
