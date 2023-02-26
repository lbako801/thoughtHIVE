# thoughtHIVE 🐝
thoughtHive is a social network web application API where users can share their thoughts, react to friends' thoughts, and create friend lists. The API is built using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition, the API uses the Luxon date library to format timestamps.

# Getting Started
To get started with the thoughtHive API, you'll need to have Node.js and MongoDB installed on your computer. You can download Node.js from the official website, and MongoDB from the MongoDB website or through a package manager such as Homebrew.  

***Once you have Node.js and MongoDB installed, you can follow these steps to run the API locally:***  

  1. Clone this repository to your local machine.
  2. Run ```npm install``` to install the necessary dependencies.
  3. Run ```npm seed``` to seed the database if you'd like.
  4. Run ```npm start``` to start the server. By default, the API will be hosted on ```http://localhost:3001```.
  
  # API Endpoints
  The thoughtHive API has the following endpoints:

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
    POST /api/users/:userid/friends/:friendId - Add a friend by ID
    DELETE /api/users/:userid/friends/:friendId - Delete a friend by ID
    
# API Demo
For a short demo of the thoughtHIVE API, watch [this video.](https://drive.google.com/file/d/1G0ex2W_10jV0RCUL30SUvqEnwMFZGv8T/view)

# Author
thoughtHIVE API was developed by [Loren Bako (me)](https://github.com/lbako801). 
 
If you have any questions or feedback, please contact me at loren@lorenbako.com or visit my website at [lorenbako.com](https://lorenbako.com). 

Thank you for using thoughtHIVE🐝!
# Contributing
If you'd like to contribute to the ThoughtHive API, feel free to open a pull request with your changes. Please make sure to include tests for any new functionality, and make sure all existing tests pass before submitting your changes.

# License
The thoughtHive API is licensed under the MIT License.  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



