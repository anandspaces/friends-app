import React from 'react';

const FriendList = ({ friends, onUnfriend }) => {
  return (
    <div>
      <h2>Your Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend._id}>
            {friend.username} <button onClick={() => onUnfriend(friend._id)}>Unfriend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
