import firebaseConfig from "./fireConfig";
import Firebase from "firebase";

const fire: Firebase.app.App = Firebase.initializeApp(firebaseConfig);
const db: Firebase.firestore.Firestore = fire.firestore();
