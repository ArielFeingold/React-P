import * as actionTypes from './actionTypes';

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    };
};

export const signupSuccess = (userId) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        userId: userId
    };
};

export const signupFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    };
};

export const signup = (email, password, username) => {

    return dispatch => {
      dispatch(signupStart());
      const authData = {
          user: {
            email: email,
            password: password,
            username: username
          }
      };
      let url = 'http://localhost:3001/users';
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
          .then( json => {
            console.log(json)
            dispatch(signupSuccess(json.user.id))
          })
          .then(dispatch(login(email, password)))
          .catch( err => {
            dispatch(signupFail(err))
          })
      };
  }

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
            .then( json => {
              dispatch(loginSuccess(json.jwt))
            })
            .catch( err => {
              dispatch(signupFail(err))
            })
        };
    }
