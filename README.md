# MERN Stack Friends App

A full-stack application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to register, log in, search for other users, send friend requests, and recommend friends based on mutual connections.

## Features
- **User Authentication**: Sign up, login, and JWT-based session management.
- **Add Friend Functionality**: Users can search, send friend requests, accept/reject friend requests.
- **Friend Recommendation System**: Suggest friends based on mutual connections.
- **Responsive UI**: Built with React and Vite for a smooth user experience.
- **Optimized Backend**: Express.js and MongoDB for efficient handling of requests and data.

## Tech Stack
- **Frontend**: React.js, Vite, Redux/Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Other**: Mongoose, bcryptjs, dotenv, cors

## Installation

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/friends-app.git
    cd friends-app/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:
    ```ini
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/friendsApp
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start MongoDB (make sure MongoDB is running):
    ```bash
    mongod
    ```

5. Start the backend server:
    ```bash
    node src/server.js
    ```

6. The backend will be available at `http://localhost:5000`.

### Frontend Setup
1. In a separate terminal, navigate to the frontend folder:
    ```bash
    cd friends-app/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

4. The frontend will be available at `http://localhost:3000`.
