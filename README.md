# thoughtHIVE 🐝
thoughtHive is a social network web application API where users can share their thoughts, react to friends' thoughts, and create friend lists. The API is built using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition, the API uses the Luxon date library to format timestamps.

# Getting Started
To get started with the ThoughtHive API, you'll need to have Node.js and MongoDB installed on your computer. You can download Node.js from the official website, and MongoDB from the MongoDB website or through a package manager such as Homebrew.  
Once you have Node.js and MongoDB installed, you can follow these steps to run the API locally:  
  1. Clone this repository to your local machine.
  2. Run npm install to install the necessary dependencies.
  3. Create a new .env file in the root directory of the project with the following variables:  

    MONGODB_URI=<your MongoDB connection string>
    JWT_SECRET=<your secret key for JSON Web Tokens>

  4. Run ```npm start``` to start the server. By default, the API will be hosted on ```http://localhost:3001```.
  
  # API Endpoints
  The ThoughtHive API has the following endpoints:

## Users
    POST /api/users - Create a new user
    GET /api/users - Get all users
    GET /api/users/:userId - Get a specific user by ID
    PUT /api/users/:userId - Update a specific user by ID
    DELETE /api/users/:userId - Delete a specific user by ID
## Thoughts
    POST /api/thoughts - Create a new thought
    GET /api/thoughts - Get all thoughts
    GET /api/thoughts/:thoughtId - Get a specific thought by ID
    PUT /api/thoughts/:thoughtId - Update a specific thought by ID
    DELETE /api/thoughts/:thoughtId - Delete a specific thought by ID
## Reactions
    POST /api/reactions - Create a new reaction
    DELETE /api/reactions/:reactionId - Delete a specific reaction by ID
## Friends
    POST /api/friends/:friendId - Add a friend by ID
    DELETE /api/friends/:friendId - Delete a friend by ID
    
# API Demo
For a short demo of the thoughtHIVE API, watch [this video.]()

# Contributing
If you'd like to contribute to the ThoughtHive API, feel free to open a pull request with your changes. Please make sure to include tests for any new functionality, and make sure all existing tests pass before submitting your changes.

# License
The ThoughtHive API is licensed under the MIT License. See the LICENSE file for more information.
