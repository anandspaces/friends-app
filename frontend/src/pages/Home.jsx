import React from 'react';
import SearchBar from '../components/SearchBar';
import FriendList from '../components/FriendList';

const Home = () => {
  const [friends, setFriends] = React.useState([]);

  const handleSearch = (searchTerm) => {
    console.log("Search for: ", searchTerm);
    // Implement search logic
  };

  const handleUnfriend = (friendId) => {
    console.log("Unfriend: ", friendId);
    // Implement unfriend logic
  };

  return (
    <div>
      <h1>Welcome to the Friends App</h1>
      <SearchBar onSearch={handleSearch} />
      <FriendList friends={friends} onUnfriend={handleUnfriend} />
    </div>
  );
};

export default Home;
