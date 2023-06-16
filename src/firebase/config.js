
import {initializeApp}  from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC_8p_PEms8Ry5rQqAOg1q5ScORQ7iiPok",
    authDomain: "olx-clone-83e0e.firebaseapp.com",
    projectId: "olx-clone-83e0e",
    storageBucket: "olx-clone-83e0e.appspot.com",
    messagingSenderId: "723526571871",
    appId: "1:723526571871:web:4bba4a0c98ba414af888ea"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);