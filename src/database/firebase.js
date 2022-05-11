import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYklMXFNTRw6rkjdhSpJrENLuHCwtr2W8",
  authDomain: "crm-lynx-it.firebaseapp.com",
  projectId: "crm-lynx-it",
  storageBucket: "crm-lynx-it.appspot.com",
  messagingSenderId: "496419464356",
  appId: "1:496419464356:web:49e65a79db964acfaf7231",
  measurementId: "G-83HDDX3793"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app)

const db = firebase.firestore();
export default {
    firebase,
    db,
    database
}