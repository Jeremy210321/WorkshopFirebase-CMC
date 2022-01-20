// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

export const loadFirebaseConfiguration = () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    global.dbCon = getFirestore();
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBwvEaG5mIpSVnbjeaeFqS34dsbKw-97I",
    authDomain: "contactsexample-73467.firebaseapp.com",
    projectId: "contactsexample-73467",
    storageBucket: "contactsexample-73467.appspot.com",
    messagingSenderId: "410213034246",
    appId: "1:410213034246:web:8b32922f00296715509687"
};

