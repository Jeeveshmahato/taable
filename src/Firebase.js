import firebase from 'firebase/app';
import 'firebase/firestore'; // Import other Firebase services if needed
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
