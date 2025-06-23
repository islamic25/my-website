// fire.js

// ✅ Import required Firebase modules (modular v9+ style)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhCooN2P8Z6Ba_w_nvaK1_6jat4SNo920",
  authDomain: "uf-smm-panal.firebaseapp.com",
  projectId: "uf-smm-panal",
  storageBucket: "uf-smm-panal.appspot.com",  // ✅ fixed typo: should be .appspot.com
  messagingSenderId: "414537097780",
  appId: "1:414537097780:web:b5d0dc819aad4c66b8e061"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize and export services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
console.log("🔥 Firebase connected:", app.name);