import { initializeApp } from 'firebase/app';
import Firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOq0Rpfe1ro7X5Eixfpxq4zUQV-YKKX80",
  authDomain: "wonder-acid.firebaseapp.com",
  projectId: "wonder-acid",
  storageBucket: "wonder-acid.appspot.com",
  messagingSenderId: "863989077253",
  appId: "1:863989077253:web:d846b4b3108b199338d36c",
  measurementId: "G-17D711GFQM"
};

const app = initializeApp(firebaseConfig);
const database = Firestore.getFirestore(app);

function showData() {
  const docRef = Firestore.doc(database, "head");
  Firestore.getDoc(docRef)
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function addData() {
  const docRef = Firestore.doc(database, "head");
  Firestore.setDoc(docRef, {
    name: "Arthur",
    role: "CTO",
    image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
};

export default { showData, addData };