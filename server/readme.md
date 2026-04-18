## Steps to create a server side of the project:

1. first i created a package.json file using npm init and then i added the follwoing code in the package.json file to run the server using node index.js command. I also added "type": "module" to use ES6 modules in my project.

2. then i installed all the required dependies using npm i express mongoose cors dotenv nodemon cookie-parser jsonwebtoken   
    <!-- i can download all the dependies separately but i prefer to download all the dependies at once using npm i command. -->

3. after i created a index.js file and added the following code to create a server using express. i also added dotenv to use environment variables in my project. i created a .env file and added the PORT variable to it.

4. finally i ran the server using npm run dev command and the server is running on the specified port.

5.  after this i created a new folder named config and inside that folder i created a file named connectDB.js and added the following code to connect to the MongoDB database using mongoose. i also added the MONGODB_URL variable to the .env file to store the connection string for the database. i set the IP address to 0.0.0.0/0 to allow connections from any IP address from the MongoDB Atlas cluster. i also added the connectDb function to the index.js file to connect to the database when the server starts.

6. Then i have to store the new users in the database with authentication functionality. so i created a new folder name models and inside the folder i created a file name user.model.js and added the following code into it. in my model i want to give some free credits to the new users when they sign-up so i added a credits field in the user schema and set its default value to 100. this way every new user will get 100 free credits when they sign-up.

Authentication in server side:
For authentication, we are using Google OAuth on the client side (via Firebase), but the server handles user creation and JWT token management. Here's how the authentication flow works:
User Model
Created a user.model.js file in the models folder.
The user schema includes:
name: String, required
email: String, required, unique
credits: Number, default 100 (free credits for new users)
Timestamps enabled for createdAt and updatedAt
Authentication Controller
Created auth.controller.js in the controllers folder with two main functions:
googleAuth Function
Receives name and email from the client (after Firebase authentication on frontend)
Checks if a user with the given email already exists in the database
If user doesn't exist, creates a new user with the provided name and email
Generates a JWT token using the user's MongoDB _id
Sets an HTTP-only cookie named "token" with the JWT token
Cookie settings:
httpOnly: true (prevents JavaScript access for security)
secure: false (set to true in production with HTTPS)
sameSite: "strict" (CSRF protection)
maxAge: 7 * 24 * 60 * 60 * 1000 (7 days expiration)
Returns the user object as JSON response
logOut Function
Clears the "token" cookie to log out the user
Returns a success message
JWT Token Configuration
Created token.js in the config folder
Uses jsonwebtoken library to generate tokens
Token payload contains userId (MongoDB ObjectId)
Token expires in 7 days
Uses JWT_SECRET environment variable for signing
Authentication Routes
Created auth.route.js in the routes folder
Routes:
POST /api/auth/google: Calls googleAuth controller
GET /api/auth/logout: Calls logOut controller
Server Configuration for Authentication
Uses cookie-parser middleware to parse cookies
CORS configured to allow credentials from http://localhost:5173 (client URL)
All auth routes are prefixed with /api/auth
Authentication Flow Summary:
User authenticates with Google on the client side using Firebase
Client sends user name and email to server at /api/auth/google
Server creates/finds user in database
Server generates JWT token and sets it in HTTP-only cookie
Subsequent requests can use the token for authentication (though no middleware is currently implemented for protected routes)
Logout clears the cookie
Dependencies Used:
jsonwebtoken: For JWT token generation and verification
cookie-parser: For parsing cookies in requests
cors: For cross-origin requests with credentials
mongoose: For MongoDB user model
express: Web framework
Environment Variables:
JWT_SECRET: Secret key for JWT signing
MONGODB_URL: MongoDB connection string
PORT: Server port (default 6000)
Note: Currently, there are no middleware functions for protecting routes or verifying tokens on incoming requests. The authentication is primarily handled through cookies set during login.

User Management Features:
To protect certain routes and ensure only authenticated users can access them, I created an authentication middleware. I created a new folder named middlewares and inside it, I created isAuth.js. This middleware verifies the JWT token from the cookies, checks if it's valid, and if so, attaches the userId to the request object for use in controllers. This is essential for securing endpoints that require user authentication, preventing unauthorized access to user-specific data.

Next, I created a user controller to handle user-related operations. I created user.controller.js in the controllers folder with a getCurrentUser function. This function retrieves the current user's data from the database using the userId from the request (set by the isAuth middleware). It returns the user object if found, or appropriate error messages. This allows the client to fetch the authenticated user's profile information.

To organize the user-related routes, I created user.route.js in the routes folder. This file sets up an Express router with a GET route for /current-user, which uses the isAuth middleware to authenticate the request and then calls the getCurrentUser controller. This provides a clean API endpoint for the client to get the current user's data.

Finally, I updated index.js to include the new user routes. I imported the userRouter and added app.use("/api/user", userRouter) to mount the user routes under the /api/user prefix. This integrates the user management functionality into the main server application, making it accessible via the API.


