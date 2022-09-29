export const msalConfig = {
    auth: {
      clientId: "795af149-4de4-4d2e-9f27-a3470ced13ff",
      authority: "https://login.microsoftonline.com/common",
      redirectUri:"http://localhost:3000",
      validateAuthority: false,
      framework: {
        protectedResourceMap: null
    }
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: []
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
  };