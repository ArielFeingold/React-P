import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    isNewSignup: false
};

const signupStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const signupSuccess = (state, action) => {
    return updateObject( state, {
        userId: action.userId,
        error: null,
        loading: false,
        isNewSignup: true
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
        userId: action.id,
        error: null,
        loading: false,
        isNewSignup: false
     } );
};

const loginFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const logout = (state, action) => {
    return updateObject(state, { token: null, userId: null, error: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SIGNUP_START: return signupStart(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAIL: return signupFail(state, action);

        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);

        case actionTypes.LOGOUT: return logout(state, action)
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);

        default:
            return state;
    }
};

export default reducer;
