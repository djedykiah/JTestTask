//Firebase
import firebase from 'firebase';

const firebaseConfig = {
    apiKey:            "AIzaSyBhIqSHDfOxaO7TIaUCOIim7hXN4nesopM",
    authDomain:        "frontendjoobletest.firebaseapp.com",
    databaseURL:       "https://frontendjoobletest.firebaseio.com",
    projectId:         "frontendjoobletest",
    storageBucket:     "frontendjoobletest.appspot.com",
    messagingSenderId: "777235773882",
    appId:             "1:777235773882:web:ad05c7e549dcd81e6b4583",
    measurementId:     "G-NYGTQ2VHKB",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
