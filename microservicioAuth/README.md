# AUTHENTICATION MICROSERVICE 🔐

This microservice is developed using **Node.js** and is responsible for user authentication. It handles user registration, login, and manages user-related data securely using **JWT (JSON Web Tokens)** for authentication and **bcrypt** for password hashing. All data is stored in a **MongoDB** database.

## INSTALLATION ⚙️

To run this microservice, you need to download or clone the repository and have **Node.js** and **MongoDB** installed.

Install the required dependencies by running the following command:

npm install config express mongoose bcrypt jsonwebtoken nodemon swagger-jsdoc swagger-ui-express dotenv

## DATABASE SETUP 🛠️

Ensure that you have MongoDB installed and running. Create a new database for the authentication service, or use an existing one. Configure the database connection in the .env file, specifying your MongoDB connection string under the key MONGO_URI.

Example .env configuration:

MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET="5dBegHguVTjcliz7FDAOcWscMCEuevV6HPkLJoV35M6yykpUaYUZ8Hua4Jw4tcXw"

## EXECUTION ▶️

To run the project, execute the following command:
npm start

The server will start running and can be accessed at: http://localhost:4000

## DOCUMENTATION 📄

To view the API documentation, open the following link in your browser after starting the server:

http://localhost:4000/api-docs

This documentation provides details about all available endpoints, their parameters, and expected responses.

## FEATURES 🛠️

User Registration: Securely register new users and store their hashed passwords.
User Login: Authenticate users and generate JWT tokens for session management.
Secure Passwords: Passwords are hashed using bcrypt before storage.
JWT Authentication: Endpoints are protected using JWT tokens for secure access.
CRUD Operations: Manage user data with flexibility.
Interactive Documentation: Explore API details interactively using Swagger.
