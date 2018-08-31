import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const signupStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const signupSuccess = (state, action) => {
    return updateObject( state, {
        userId: action.userId,
        error: null,
        loading: false
     } );
};

const signupFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const loginStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const loginSuccess = (state, action) => {
    return updateObject( state, {
        token: action.token,
        error: null,
        loading: false
     } );
};

const getUserSuccess = (state, action) => {
    return updateObject( state, {
        uaerId: action.userId,
        error: null,
        loading: false
     } );
};

const loginFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const logout = (state, action) => {
  console.log("in logout reducer")
    return updateObject(state, { token: null, userId: null, error: null });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SIGNUP_START: return signupStart(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAIL: return signupFail(state, action);
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.GET_USER_SUCCESS: return getUserSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;
