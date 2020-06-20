import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
        apiKey: "AIzaSyDin6CnZfSghhzg_A8mph2HKr7I51emcDw",
        authDomain: "crwn-db-162a8.firebaseapp.com",
        databaseURL: "https://crwn-db-162a8.firebaseio.com",
        projectId: "crwn-db-162a8",
        storageBucket: "crwn-db-162a8.appspot.com",
        messagingSenderId: "705649711926",
        appId: "1:705649711926:web:48321d62c2961eb5ce7197",
        measurementId: "G-H4QG5HNDYX"
      };

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});

      export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

      export default firebase;