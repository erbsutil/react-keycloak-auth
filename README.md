# React Keycloak Authentication

This project demonstrates how to implement Keycloak authentication in a React application. It is based on the tutorial available at [Implement Keycloak authentication in React](https://blog.logrocket.com/implement-keycloak-authentication-react/).

## Installation
Follow the instructions below to set up and run the project in your local environment.

### Prerequisites
Make sure you have the following software installed:

- Node.js (version 16.19.1 or higher)
- npm (version 8.19.3 or higher)

### Step 1: Clone this repository

### Step 2: Install dependencies
Navigate to the project's root directory and run the following command: `npm install`

### Step 3: Configure Keycloak
Edit the `src/keycloak.js` file and update the Keycloak configuration based on your Keycloak server settings:

```javascript
const keycloakConfig = {
  url: 'https://your-keycloak-url/auth',
  realm: 'your-realm',
  clientId: 'your-client-id',
};
```

### Step 4: Run the application
Execute the following command to start the application: `npm start`

The application will run in development mode. Open http://localhost:3000 in your browser to view it.

### Build and Deployment
To create an optimized production build of the application, use the following command: `npm run build`

### Additional Resources
Here are some additional resources that may be helpful:

- [Implement Keycloak authentication in React](https://blog.logrocket.com/implement-keycloak-authentication-react/) - Original article that inspired this project.

- [Stack Overflow: Running Docker image on Mac Air M1](https://stackoverflow.com/a/70199813/17335674) - Steps to start a local Docker image using the "keycloak-containers" project.
