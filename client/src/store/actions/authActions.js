import * as actionTypes from './actionTypes';
import jwt_decode from 'jwt-decode';

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = (token, id) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        id: id
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.LOGOUT
    };
};

export const setAuthTimeout = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, (60 * 60 * 24)); // 1 day length
    };
};

export const login = (email, password) => {

    return dispatch => {
      dispatch(loginStart());
      const authData = {
          auth: {
            email: email,
            password: password
          }
      };
      let url = 'http://localhost:3001/user_token';
      fetch(url, {
              method: "POST",
              mode: "cors",
              credentials: "same-origin",
              headers: {
                  "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify(authData),
          })
          .then( response => {
            if (!response.ok) { throw response }
            return response.json()
          })
          .then(response => {
            var decodedJWT = jwt_decode(response.jwt);
            const expirationDate = new Date(new Date().getTime() + ( decodedJWT.exp * 1000));
            localStorage.setItem('token', response.jwt);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', decodedJWT.sub)
            dispatch(loginSuccess(response.jwt, decodedJWT.sub));
            dispatch(setAuthTimeout())
          })
            .catch(err => {
                dispatch(loginFail("Not Found"));
            });
      };
  }
