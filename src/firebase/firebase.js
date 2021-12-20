import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;
