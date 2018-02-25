// initial state
const initialState = {
  user: {}
}

// action types
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';

// reducer
export default function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN:
      return { ...state, user: payload };
    case REGISTER:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: payload };
    case GET_USER:
      return { ...state, user: payload };

    default: return state;
  }
}

// action creators
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const register = (user) => {
  return {
    type: REGISTER,
    payload: user
  };
}

export const logout = (user) => {
  return {
    type: LOGOUT,
    payload: user
  };
}

export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user
  };
}