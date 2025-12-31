// ----------------------
// Firebase Initialization
// ----------------------
const firebaseConfig = {
  apiKey: "AIzaSyCNujpIBIvJXMk34yQF1VeuTVFi5M7vdc0",
  authDomain: "sathimere-415fa.firebaseapp.com",
  projectId: "sathimere-415fa",
  storageBucket: "sathimere-415fa.firebasestorage.app",
  messagingSenderId: "290492321074",
  appId: "1:290492321074:web:05aa3d9abc2d3ab7635b2b"
};

firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Export for all pages
window.auth = auth;
window.db = db;
window.storage = storage;
