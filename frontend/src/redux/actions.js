import axios from 'axios';

const API_URL = "http://localhost:5000/api";

export const setUser = (user) => ({ type: "SET_USER", payload: user });

export const setFriends = (friends) => ({ type: "SET_FRIENDS", payload: friends });

export const fetchUser = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setUser(res.data));
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const fetchFriendRequests = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/friend-requests`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setFriendRequests(res.data));
  } catch (error) {
    console.error("Error fetching friend requests:", error);
  }
};

export const fetchRecommendations = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/friend-recommendations`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setRecommendations(res.data));
  } catch (error) {
    console.error("Error fetching friend recommendations:", error);
  }
};
