# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Netflix GPT

- Create React App
- configured tailwindcss
- Header
- Routing of App
- Login Form
- Sign up Form
- Form validation
- useRef Hooks
- Firebase setup
- Deployed app on firebase
- SignUp / SignIn
- Redux store with userSlice
- Implemented Signout
- Update Profile
- Fetch from TMDB Movies API
- BugFix : Signup user displayName and Profile picture update
- Bugfix : If the user is logged in redirect to /browse to /login page and vice versa.
- Bugfix : Unsubscribed to the onAuthStateChange callback.
- Addeed constants.js file (Contains hardcoded values)

- Register for tmdb api and create an app and get access token.
- Make an api call for movieList/nowPlaying
- Custom hook for NowPlaying movies
- Create a movieSlice
- updated store with movies Data
- Main container and secondary container
- Fetched data for trailer video
- update store with trailer video
- embedded youtube video and make it autoplay and mute
- tailwind classes for css
- Build secondary container
- Build movieList
- Build MovieCard
- Created custom hooks for each movie category i.e popular, top-rated etc.
- GPT search Feature
  - GPT search pages
  - GPT slice added data
  - GPT search Bar / used gpt 3.5 API / Memoization
- (Bonus) Multi-Languages support
- Fetched GPT movie suggestion
- Reused MovieList component for GPT suggested movies
- .env to secure our secret key


 
# Features

- Login / Sign Up
  - Sign In / Sign Up Form
  - redirect to Browse page
- Browse (Aftfer authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title / Description
    - Movie Suggestions
      - Movie list \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions
