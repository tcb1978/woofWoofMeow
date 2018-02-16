// initial state
const initialState = {
  user: {}
}
// action type 
const LOGIN = 'LOGIN';

// action creators
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

// reducer
const reducer = (state = initialState, action) => {
  // const { type, payload } = action
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };

    default: return state;
  }
}

export default reducer;