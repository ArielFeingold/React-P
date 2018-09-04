<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> fc44e0e683cff1e369f5fd13ea961736a4cd2485
import * as actionTypes from './actionTypes';
import jwt_decode from 'jwt-decode';

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    };
};

export const signupSuccess = (userId) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        userId: userId,
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
            return response.json()
          })
          .then( json => {
            if(json.status === 400) {throw json}
            dispatch(signupSuccess(json.user.id))
          })
          .catch( err => {
            dispatch(signupFail(err.errors))
          })
      };
  }

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

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, 1000 * 60 * 60 * 25);
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
            const expirationDate = new Date(decodedJWT.exp * 1000);
            localStorage.setItem('token', response.jwt);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', decodedJWT.sub)
            dispatch(loginSuccess(response.jwt, decodedJWT.sub));
            dispatch(checkAuthTimeout(decodedJWT.exp))
          })
            .catch(err => {
                dispatch(loginFail("Not Found"));
            });
      };
  }

export const authCheckState = () => {
  return dispatch => {
      const token = localStorage.getItem('token');
      if (!token) {
          dispatch(logout());
      } else {
          const expirationDate = new Date(localStorage.getItem('expirationDate'));
          if (expirationDate <= new Date()) {
              dispatch(logout());
          } else {
              const userId = localStorage.getItem('userId');
              dispatch(loginSuccess(token, userId));
              dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ))
          }
      }
  };
};
<<<<<<< HEAD
=======
=======
// import * as actionTypes from './actionTypes';
// import jwt_decode from 'jwt-decode';
//
// export const signupStart = () => {
//     return {
//         type: actionTypes.SIGNUP_START
//     };
// };
//
// export const signupSuccess = (userId) => {
//     return {
//         type: actionTypes.SIGNUP_SUCCESS,
//         userId: userId,
//     };
// };
//
// export const signupFail = (error) => {
//     return {
//         type: actionTypes.SIGNUP_FAIL,
//         error: error
//     };
// };
//
// export const signup = (email, password, username) => {
//
//     return dispatch => {
//       dispatch(signupStart());
//       const authData = {
//           user: {
//             email: email,
//             password: password,
//             username: username
//           }
//       };
//       let url = 'http://localhost:3001/users';
//       fetch(url, {
//               method: "POST",
//               mode: "cors",
//               credentials: "same-origin",
//               headers: {
//                   "Content-Type": "application/json; charset=utf-8",
//               },
//               body: JSON.stringify(authData),
//           })
//           .then( response => {
//             return response.json()
//           })
//           .then( json => {
//             if(json.status === 400) {throw json}
//             dispatch(signupSuccess(json.user.id))
//           })
//           .catch( err => {
//             dispatch(signupFail(err.errors))
//           })
//       };
//   }
//
//   export const loginStart = () => {
//     return {
//         type: actionTypes.LOGIN_START
//     };
// };
//
// export const loginSuccess = (token, id) => {
//     return {
//         type: actionTypes.LOGIN_SUCCESS,
//         token: token,
//         id: id
//     };
// };
//
// export const loginFail = (error) => {
//     return {
//         type: actionTypes.LOGIN_FAIL,
//         error: error
//     };
// };
//
// export const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationDate');
//     localStorage.removeItem('userId');
//     return {
//         type: actionTypes.LOGOUT
//     };
// };
//
// export const setAuthTimeout = () => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, (60 * 60 * 25)); // 1 day length
//     };
// };
//
// export const login = (email, password) => {
//
//     return dispatch => {
//       dispatch(loginStart());
//       const authData = {
//           auth: {
//             email: email,
//             password: password
//           }
//       };
//       let url = 'http://localhost:3001/user_token';
//       fetch(url, {
//               method: "POST",
//               mode: "cors",
//               credentials: "same-origin",
//               headers: {
//                   "Content-Type": "application/json; charset=utf-8",
//               },
//               body: JSON.stringify(authData),
//           })
//           .then( response => {
//             if (!response.ok) { throw response }
//             return response.json()
//           })
//           .then(response => {
//             var decodedJWT = jwt_decode(response.jwt);
//             const expirationDate = new Date(decodedJWT.exp * 1000);
//             localStorage.setItem('token', response.jwt);
//             localStorage.setItem('expirationDate', expirationDate);
//             localStorage.setItem('userId', decodedJWT.sub)
//             dispatch(loginSuccess(response.jwt, decodedJWT.sub));
//             dispatch(setAuthTimeout())
//           })
//             .catch(err => {
//                 dispatch(loginFail("Not Found"));
//             });
//       };
//   }
//
// export const authCheckState = () => {
//   return dispatch => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//           dispatch(logout());
//       } else {
//           const expirationDate = new Date(localStorage.getItem('expirationDate'));
//           if (expirationDate <= new Date()) {
//               dispatch(logout());
//           } else {
//               const userId = localStorage.getItem('userId');
//               dispatch(loginSuccess(token, userId));
//               dispatch(setAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
//           }
//       }
//   };
// };
>>>>>>> db8bfe6bf3a773d05b37b861ad6a4342d17c0617
>>>>>>> fc44e0e683cff1e369f5fd13ea961736a4cd2485
