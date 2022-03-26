// // Import the functions you need from the SDKs you need // 1:15-
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdMJzJ3eno1ZlavsmcYfNcdhuLNxxeFkM",
  authDomain: "phalswal-clothing.firebaseapp.com",
  projectId: "phalswal-clothing",
  storageBucket: "phalswal-clothing.appspot.com",
  messagingSenderId: "875855112039",
  appId: "1:875855112039:web:01bc511d663afc79fe71c2",
  measurementId: "G-YGHF2BHWXR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
