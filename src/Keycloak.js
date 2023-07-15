import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:9080/auth",
 realm: "keycloak-react-auth",
 clientId: "react-auth",
});

export default keycloak;