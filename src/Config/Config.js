import firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD9ixubhc3Ei2rBdPnXiRngCEKi4tHVbys",
    authDomain: "ecommerce-web-710e1.firebaseapp.com",
    projectId: "ecommerce-web-710e1",
    storageBucket: "ecommerce-web-710e1.appspot.com",
    messagingSenderId: "300650778042",
    appId: "1:300650778042:web:ff44a4dff54b99f39f6183"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
// export default firebase.database().ref();//
export { auth, db, storage }