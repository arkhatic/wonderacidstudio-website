import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

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
const db = getFirestore(app);

const getHead = async () => {
  const querySnapshot = await getDocs(collection(db, "head"));
  let head = [];
  querySnapshot.forEach((doc) => {
    head.push(doc.data());
  });
  return head;
}

const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, 'teams'));
  let lead = [];
  querySnapshot.forEach((doc) => {
    lead.push(doc.data());
  });
  return lead;
}

export { 
  getHead, getProjects 
};