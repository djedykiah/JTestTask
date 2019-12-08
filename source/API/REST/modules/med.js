//Core
import firebase from 'firebase/firebase.js';

// Config
import { user } from 'config';

const db = firebase.firestore().collection(user.COLLECTION_NAME);

export class Med {

    getMedicines = async () => {
        const snapshot = await db.get();

        return snapshot.docs.map((medicine) => ({ id: medicine.id, ...medicine.data() }));
    };

    deleteMedicine = async (id) => {
        const deletedItem = await db.doc(id).delete();

        return deletedItem;
    };

    addMedicine = async (id) => {
        const newItem = await db.add(id);

        return newItem;
    };

    editMedicine = async (data) => {
        const editedItem = await db.doc(data.id).set(data, { merge: true });

        return editedItem;
    };

}
