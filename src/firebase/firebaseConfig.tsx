import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCqF7ozryAP8fJjbvtpkjwAVLGADUelz1w",
    authDomain: "journal-app-95d95.firebaseapp.com",
    projectId: "journal-app-95d95",
    storageBucket: "journal-app-95d95.appspot.com",
    messagingSenderId: "192055603411",
    appId: "1:192055603411:web:0abd5da33e77ba0a876426"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
