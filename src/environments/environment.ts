// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


//Connects to api website
export const environment = {
  production: false,
  BASE_URL: 'https://rawg-video-games-database.p.rapidapi.com',

  firebase: {
  apiKey: "AIzaSyBlh-6RbVrcjpM8bwZiRfJXoLTlcwjWh7w",
  authDomain: "gamedatabase-13e2e.firebaseapp.com",
  projectId: "gamedatabase-13e2e",
  storageBucket: "gamedatabase-13e2e.appspot.com",
  messagingSenderId: "443979638562",
  appId: "1:443979638562:web:53e91dbbc42e375999277b",
  measurementId: "G-1JWWRYMS6Z"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
