// index.js or App.js

import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const domain = "dev-2g8xxyulbxbczv8t.us.auth0.com";
const clientId = "y1dq8e0VakazE9xIDqPy1LFzlNi2Kaz9";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);