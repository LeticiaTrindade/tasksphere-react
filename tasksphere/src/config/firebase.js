import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTtz3EJ5758vMAdds47yuJqPZ5g0jrcP0",
  authDomain: "tasksphere-2b393.firebaseapp.com",
  projectId: "tasksphere-2b393",
  storageBucket: "tasksphere-2b393.firebasestorage.app",
  messagingSenderId: "112834698855",
  appId: "1:112834698855:web:18082f0d673f80e97bfec2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
