// initial state
const initialState = {
  user: {},
  userUrl: '',
  animalUrl: ''
}

// action types
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';
const USERURLSEND = 'USERURLSEND';
const ANIMALURLSEND = 'ANIMALURLSEND';

// reducer
export default function reducer (state = initialState, action) {
  const { type, payload } = action
  switch ( type ) {
    case LOGIN:
      return { ...state, user: payload };
    case REGISTER:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: payload };
    case GET_USER:
      return { ...state, user: payload };
    case USERURLSEND:
      return { ...state, userUrl: payload };
    case ANIMALURLSEND:
      return { ...state, animalUrl: payload };

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

export const userUrlSend = (userUrl) => {
  return {
    type: USERURLSEND,
    payload: userUrl
  };
};

export const animalUrlSend = (animalUrl) => {
  return {
    type: ANIMALURLSEND,
    payload: animalUrl
  };
};