// src/controllers/friendController.js
import User from '../models/User.js';

// Add Friend
export const addFriend = async (req, res) => {
  const { friendId } = req.body;

  try {
    const user = await User.findById(req.user.userId);
    const friend = await User.findById(friendId);

    if (!friend) return res.status(404).json({ message: 'Friend not found' });

    if (user.friends.includes(friendId)) return res.status(400).json({ message: 'Already friends' });

    user.friends.push(friendId);
    friend.friends.push(user._id);

    await user.save();
    await friend.save();

    res.status(200).json({ message: 'Friend added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
