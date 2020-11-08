import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvz0lJ2tynkjYKlCCBMNmrqt8l5b8QmaE",
  authDomain: "hetavs-netflix-clone.firebaseapp.com",
  databaseURL: "https://hetavs-netflix-clone.firebaseio.com",
  projectId: "hetavs-netflix-clone",
  storageBucket: "hetavs-netflix-clone.appspot.com",
  messagingSenderId: "1026673056111",
  appId: "1:1026673056111:web:b104d686ba9c5cc9a7f09a",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
