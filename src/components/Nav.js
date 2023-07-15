import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <nav>
        <h1>Keycloak React AUTH.</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/secured">Secured Page</a>
          </li>
        </ul>
        <div>
          {!keycloak.authenticated && (
            <button
              type="button"
              className="text-blue-800"
              onClick={() => keycloak.login()}
            >
              Login
            </button>
          )}

          {!!keycloak.authenticated && (
            <button
              type="button"
              className="text-blue-800"
              onClick={() => keycloak.logout()}
            >
              Logout ({keycloak.tokenParsed.preferred_username})
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
