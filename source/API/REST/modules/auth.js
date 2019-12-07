//Core
import firebase from 'firebase/firebase.js';

// Config
import { user } from 'config';

export class Auth {

    signIn () {
        firebase.auth().signInWithEmailAndPassword(user.EMAIL, user.PASSWORD).catch((error) => {
            const errorCode = error.code;

            const errorMessage = error.message;

            throw new Error('code', errorCode, 'message', errorMessage);
        });
    }

}
