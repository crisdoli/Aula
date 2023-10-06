import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";



//Colocar em variaveis de ambientes
const firebaseConfig = {
  apiKey: "AIzaSyCMxS5bZcWbvE1oThJAQSZu4id5bc9wKaE",
  authDomain: "crud-150ac.firebaseapp.com",
  projectId: "crud-150ac",
  storageBucket: "crud-150ac.appspot.com",
  messagingSenderId: "678664757843",
  appId: "1:678664757843:web:c73a5123301c21ee8bdca6",
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export { app, db };