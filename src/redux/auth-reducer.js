import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });

export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.getMe()
      .then(response => {        
        dispatch(toggleIsFetching(false));
        if(response.data.resultCode === 0){
          let{id, login, email} = response.data.data;
          dispatch(setAuthUserData(id, email, login));
        }
      });
};

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReducer;
