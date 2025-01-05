import React, { useEffect } from 'react';
import FriendRecommendations from '../components/FriendRecommendations';
import FriendList from '../components/FriendList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchFriendRequests, fetchRecommendations } from '../redux/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, friends, recommendations } = useSelector((state) => state);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchUser(token));
      dispatch(fetchFriendRequests(token));
      dispatch(fetchRecommendations(token));
    }
  }, [dispatch]);

  const handleAddFriend = (friendId) => {
    console.log("Add friend: ", friendId);
    // Implement add friend logic
  };

  const handleUnfriend = (friendId) => {
    console.log("Unfriend: ", friendId);
    // Implement unfriend logic
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <FriendList friends={friends} onUnfriend={handleUnfriend} />
      <FriendRecommendations recommendations={recommendations} onAddFriend={handleAddFriend} />
    </div>
  );
};

export default Dashboard;
