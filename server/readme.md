# Steps to create a server side of the project:

1. first i created a package.json file using npm init and then i added the follwoing code in the package.json file to run the server using node index.js command. I also added "type": "module" to use ES6 modules in my project.

2. then i installed all the required dependies using npm i express mongoose cors dotenv nodemon cookie-parser jsonwebtoken   
    <!-- i can download all the dependies separately but i prefer to download all the dependies at once using npm i command. -->

3. after i created a index.js file and added the following code to create a server using express. i also added dotenv to use environment variables in my project. i created a .env file and added the PORT variable to it.

4. finally i ran the server using npm run dev command and the server is running on the specified port.

5.  after this i created a new folder named config and inside that folder i created a file named connectDB.js and added the following code to connect to the MongoDB database using mongoose. i also added the MONGODB_URL variable to the .env file to store the connection string for the database. i set the IP address to 0.0.0.0/0 to allow connections from any IP address from the MongoDB Atlas cluster. i also added the connectDb function to the index.js file to connect to the database when the server starts.

6. Then i have to store the new users in the database with authentication functionality. so i created a new folder name models and inside the folder i created a file name user.model.js and added the following code into it. in my model i want to give some free credits to the new users when they sign-up so i added a credits field in the user schema and set its default value to 100. this way every new user will get 100 free credits when they sign-up.

## Authentication in server side:
7. For authentication, we are using Google OAuth on the client side (via Firebase), but the server handles user creation and JWT token management. Here's how the authentication flow works:


##  Authentication Overview

* Google authentication is handled on the **client (Firebase)**
* The **server verifies user data**, stores users, and manages authentication via JWT
* Authentication state is maintained using **HTTP-only cookies**

##  User Model

A `user.model.js` file is created inside the `models` directory.

### Schema Fields:

* **name** → String (required)
* **email** → String (required, unique)
* **credits** → Number (default: 100 for new users)
* **timestamps** → Automatically stores `createdAt` and `updatedAt`

##  Authentication Controller

Implemented in `auth.controller.js` inside the `controllers` folder.

## 🔹 Google Authentication (`googleAuth`)

This function handles login/signup logic:

* Receives `name` and `email` from the client
* Checks if the user already exists in the database
* If not → creates a new user
* Generates a JWT token using the user's MongoDB `_id`
* Stores the token in an HTTP-only cookie

### Cookie Configuration:

```js
{
  httpOnly: true,
  secure: false, // set true in production (HTTPS)
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
}
```

* Returns the authenticated user as JSON response


##  Logout (`logout`)

* Clears the authentication cookie (`token`)
* Returns a success response


##  JWT Configuration

Handled in `config/token.js`

* Uses the `jsonwebtoken` library
* Payload includes: `userId`
* Token expiration: **7 days**
* Secret key stored in environment variable: `JWT_SECRET`


##  Authentication Routes

Defined in `auth.route.js`

### Available Endpoints:

* `POST /api/auth/google` → Handles login/signup
* `GET /api/auth/logout` → Logs out user

##  Server Configuration

* Uses `cookie-parser` to read cookies
* CORS is enabled with credentials support:

```
http://localhost:5173
```

* All authentication routes are prefixed with:

```
/api/auth
```


##  Authentication Flow

1. User signs in using Google (Firebase)
2. Client sends user data to `/api/auth/google`
3. Server checks or creates the user
4. JWT token is generated
5. Token is stored in an HTTP-only cookie
6. Subsequent requests use the cookie for authentication
7. Logout clears the cookie


##  Dependencies

* `express` → Backend framework
* `mongoose` → MongoDB ORM
* `jsonwebtoken` → JWT handling
* `cookie-parser` → Cookie parsing
* `cors` → Cross-origin requests


##  Environment Variables

Create a `.env` file and add:

```env
JWT_SECRET=your_secret_key
MONGODB_URL=your_mongodb_connection
PORT=6000
```

##  User Management & Route Protection

###  Authentication Middleware (`isAuth.js`)

Located inside the `middlewares` folder.

#### Responsibilities:

* Extracts JWT token from cookies
* Verifies token validity
* Attaches `userId` to `req` object
* Blocks unauthorized access


### User Controller (`user.controller.js`)

#### Function: `getCurrentUser`

* Fetches the currently logged-in user using `userId`
* Returns user data or error response

###  User Routes (`user.route.js`)

#### Endpoint:

* `GET /api/user/current-user`

✔ Protected route
✔ Uses `isAuth` middleware
✔ Returns current user details


### Server Integration

In `index.js`, user routes are mounted:

```js
app.use("/api/user", userRouter);
```

This makes all user-related APIs accessible under `/api/user`.

## User Management Features:

8. To protect certain routes and ensure only authenticated users can access them, I created an authentication middleware. I created a new folder named middlewares and inside it, I created isAuth.js. This middleware verifies the JWT token from the cookies, checks if it's valid, and if so, attaches the userId to the request object for use in controllers. This is essential for securing endpoints that require user authentication, preventing unauthorized access to user-specific data.

9. Next, I created a user controller to handle user-related operations. I created user.controller.js in the controllers folder with a getCurrentUser function. This function retrieves the current user's data from the database using the userId from the request (set by the isAuth middleware). It returns the user object if found, or appropriate error messages. This allows the client to fetch the authenticated user's profile information.

10. To organize the user-related routes, I created user.route.js in the routes folder. This file sets up an Express router with a GET route for /current-user, which uses the isAuth middleware to authenticate the request and then calls the getCurrentUser controller. This provides a clean API endpoint for the client to get the current user's data.

11. Finally, I updated index.js to include the new user routes. I imported the userRouter and added app.use("/api/user", userRouter) to mount the user routes under the /api/user prefix. This integrates the user management functionality into the main server application, making it accessible via the API.