import React from 'react';

const FriendRecommendations = ({ recommendations, onAddFriend }) => {
  return (
    <div>
      <h2>Recommended Friends</h2>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec._id}>
            {rec.username} <button onClick={() => onAddFriend(rec._id)}>Add Friend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRecommendations;
