# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





## Steps to create the client side of the project:

7. now i will work on client side. first i created a new folder named client and then i initialized a new React project using Vite by running the command npm create vite@latest in the terminal. i also installed all the required dependencies for the client side using npm i command.

8. after then i remaoved all the unnecessary files and change the fav icon to a custom one. for changing the fav icon i just added the image in the public folder and change the link in the index.html file to point to the new image. i also added some more few images in my assets folder to use it my project further.

9. then i installed tailwindCSS in my project to style the components. i followed the official documentation of tailwindcss to install it in my project. i impoted tailwind css in my index.css to use it in my project. i also added the tailwind css plugin in the vite.config.js file to use it in my project.

10. after this i install some more dependencies like react-router-dom for routing im my project and axios for making API calls to the server and react-icons for using icons in my project.

11. then i have to set-up my react-router-dom to use in my project. i wrapped my App component with BrowserRouter in the main.jsx file to use routing in my project. then i created two pages Home and Auth in the pages folder and set-up the routes for these pages in the App.jsx file.

# Authentication in cient side:
12. For Authentication in the client side to login and sign-up, I used firebase authentication. but before that i have to create a Ui of a sign-up and login page which i created in the auth.jsx file. to make the UI better i used some icons from react icons (we istalled the dependency in the previous steps) and to make a UX better I used motion from framer-motion(we installed the dependency through npm i framer-motion from its documentation). motion is a library for animations in react. however we can use transform and transition properties of tailwind css to make some simple animations but for more complex animations we can use motion. i used motion to animate the input fields and buttons in the auth page.

13. after creating the UI of the auth page i have to set up the firebase authentication in my project. for that i have to create a folder named utils in the src folder and then i created a file name firebase.js in the utils folder. in this file i have to initialize the firebase app and export the auth object to use it in my project. i also have to create a firebase project in the firebase console and get the firebase config object to initialize the firebase app.

14. after then i have to create another .env file in the root of the client folder to store the API keys and other sensitive information.I added the API key of firebase into the .env file and then i import the API key from the .env file in the firebase.js file to initialize the firebase app. i also have to add the .env file in the .gitignore file to prevent it from being pushed to the remote repository. 

15. after then i imported (import{getAuth, GoogleAuthProvider} from "firebase/auth") the auth object and the google auth provider to use it in my project with the help of the auth object i can use the signInWithPopup method to sign-in with google and with the help of the google auth provider i can specify that i want to sign-in with google. 

16. Ater then i came back to the auth.jsx file and created a function named handleGoogleAuth which will be called when the user clicks on the sign-in with google button. in this function i used the signInWithPopup method to sign-in with google and then i can get the user information from the result of the sign-in process. i also have to handle the error if the sign-in process fails. i also have to import signInWithPopup and GoogleAuthProvider in the auth.jsx file to use it in the handleGoogleAuth function.