import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKW4ON1RsrFNJQcWaxJ_ddddsplXFOH-0",
  authDomain: "newredmeat.firebaseapp.com",
  projectId: "newredmeat",
  storageBucket: "newredmeat.appspot.com",
  messagingSenderId: "377404956117",
  appId: "1:377404956117:web:29782db01b38382e87f15c",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
