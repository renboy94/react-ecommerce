import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMsfMIuaXpm5AJdOAiVyVcdD-BDtnxYf8",
  authDomain: "grocr-ad05a.firebaseapp.com",
  databaseURL: "https://grocr-ad05a.firebaseio.com",
  projectId: "grocr-ad05a",
  storageBucket: "grocr-ad05a.appspot.com",
  messagingSenderId: "706553246169",
  appId: "1:706553246169:web:773ac01a918a4eeffb69c8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;