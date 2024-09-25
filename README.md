# Todo List Application

This is a simple Todo List application built with React for the frontend and a Node.js/Express backend. The app allows users to register, login, and manage their tasks (CRUD operations).

## Features

- User authentication (Register/Login)
- Add, edit, delete tasks
- Fetch and display tasks from the backend
- Form validation for user inputs
- Token-based authentication using JWT

## Technologies Used

### Frontend
- React.js
- CSS for styling

### Backend
- Node.js
- Express
- JWT for user authentication
- SQLite for the database

### Additional Libraries/Tools
- Fetch API for making requests
- React Hooks for state management
- UseState, UseEffect


## Prerequisites

- Node.js
- NPM 
- React.js

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Rakshithaalluri/todo-list.git
## Navigate to the backend directory:
cd backend

## Install the required dependencies:
npm install

## Set up the environment file .env with your JWT secret key and port configuration:
JWT_SECRET=your_secret_key
PORT=3001

## Initialize the database by running:

node initializeDatabase.js

## Start the backend server:

npm start

### Frontend

## Open another terminal and navigate to the frontend directory:

cd frontend

## Install the required dependencies:

npm install

## Start the React app:

npm start

### Usage

Register a new account.

Login using your credentials.

## Once logged in, you can:

Add new tasks by providing a description and status.

Edit or update an existing task.

Delete tasks.

View all your tasks.

### API Endpoints
## Authentication

POST /login – Log in a user.

POST /register – Register a new user.

## Todos
GET /todos – Get all todos.

POST /todos – Add a new todo.

PUT /todos/:id – Update a specific todo by ID.

DELETE /todos/:id – Delete a specific todo by ID.
