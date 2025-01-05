const initialState = {
  user: null,
  friends: [],
  friendRequests: [],
  recommendations: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_FRIENDS":
      return { ...state, friends: action.payload };
    case "SET_FRIEND_REQUESTS":
      return { ...state, friendRequests: action.payload };
    case "SET_RECOMMENDATIONS":
      return { ...state, recommendations: action.payload };
    default:
      return state;
  }
};
