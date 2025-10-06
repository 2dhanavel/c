// App.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div >
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Sign In / Sign Up</button>
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default App;