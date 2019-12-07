//Config
import { user } from 'config';

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

const db = firebase.firestore().collection(user.COLLECTION_NAME);

export const getMedicines = async () => {
    const snapshot = await db.get();

    return snapshot.docs.map((doc) => doc.data());
};

export const deleteMedicine = async (id) => {
    const deletedItem = await db.doc(id).delete();

    return deletedItem;
};

export const addMedicine = async (id) => {
    const newItem = await db.add(id);

    return newItem;
};

export const editMedicine = async (data) => {
    const editedItem = await db.doc(data.id).set(data, { merge: true });

    return editedItem;
};

export default firebase;
