import { initializeApp } from 'firebase/app';
import { projectBoilerplate, memberBoilerplate } from './types/index'
import { 
  getFirestore, 
  collection, query, where,
  getDoc, getDocs, addDoc, deleteDoc, doc, setDoc 
} from 'firebase/firestore';


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


// members operations
async function addMember() {
  const docRef = await addDoc(collection(db, "members"), memberBoilerplate);
  return docRef.id;
}

async function saveMember(member) {
  console.log(member);

  await deleteMember(member.id);
  console.log(member.id)
  const docRef = await setDoc(doc(db, 'members', member.id), {
    id: member.id,
    verified: member.verified,
    head: member.head,
    email: member.email,
    name: member.name,
    age: member.age,
    profilePicture: member.profilePicture,
    pronouns: member.pronouns,
    about: member.about,
    aboutPortuguese: member.aboutPortuguese,
    roles: member.roles,
    links: member.links,
    images: member.images
  });
  return docRef;
}

async function deleteMember(id) {
  await deleteDoc(doc(db, 'members', id));
  return id;
}

async function getMemberId(name) {
  const querySnapshot = await getDocs(collection(db, 'members'));
  let id = '';
  querySnapshot.forEach((doc) => {
    if (doc.data().name === name) {
      id = doc.id;
    }
  });
  return id;
}

async function getMember(id) {
  const docRef = doc(db, 'members', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return {};
  }
}


// projects operations
async function addProject() {
  const docRef = await addDoc(collection(db, 'teams'), projectBoilerplate);
  return docRef.id;
}

async function deleteProject(id) {
  await deleteDoc(doc(db, 'teams', id));
  return id;
}

async function getProjectId(name) {
  const querySnapshot = await getDocs(collection(db, 'teams'));
  let id = '';
  querySnapshot.forEach((doc) => {
    if (doc.data().name === name) {
      id = doc.id;
    }
  });
  return id;
}

async function editProject(project) {
  const docRef = doc(db, 'teams', project.id);
  await deleteDoc(docRef);
  const addedDoc = await setDoc(doc(db, 'teams', project.id), {
    name: project.name,
    description: project.description,
    descriptionPortuguese: project.descriptionPortuguese,
    coverImage: project.coverImage,
    members: project.members
  });
  return addedDoc;
}

const getMembers = async () => {
  const querySnapshot = await getDocs(collection(db, "members"));
  var members = [];
  querySnapshot.forEach((doc) => {
    members.push(doc.data());
  });
  return members;
}

const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, 'teams'));
  let project = [];
  querySnapshot.forEach((doc) => {
    project.push(doc.data());
  });
  return project;
}

const checkIfVerified = async (id) => {
  const querySnapshot = await getDocs(collection(db, 'members'));
  let verified;
  querySnapshot.forEach((doc) => {
    verified = doc.data().verified;
  });
  return verified;
}

const checkIfHead = async (id) => {
  const querySnapshot = await getDocs(collection(db, 'members'));
  let head;
  querySnapshot.forEach((doc) => {
    head = doc.data().head;
  });
  return head;
}

// helpers operations
async function getAllRoles() {
  const querySnapshot = await getDocs(collection(db, 'helpers'));
  let roles = [];
  querySnapshot.forEach((doc) => {
    roles.push(doc.data());
  });
  return roles;
}

async function editRoles(id, roles) {
  const docRef = doc(db, 'helpers', id);
  await deleteDoc(docRef);
  const addedDoc = await setDoc(doc(db, 'helpers', id), {
    roles: roles
  });
  return addedDoc;
}

async function getAllTexts() {
  const querySnapshot = await getDocs(collection(db, 'texts'));
  let texts = [];
  querySnapshot.forEach((doc) => {
    texts.push(doc.data());
  });
  return texts;
}

async function getContactText() {
  const querySnapshot = await getDocs(query(collection(db, 'texts'), where('id', '==', 'contactUsView')));
  let texts = [];
  querySnapshot.forEach((doc) => {
    texts.push(doc.data());
  });
  return texts;
}

async function getJoinText() {
  const querySnapshot = await getDocs(query(collection(db, 'texts'), where('id', '==', 'joinUsView')));
  let texts = [];
  querySnapshot.forEach((doc) => {
    texts.push(doc.data());
  });
  return texts;
}

async function getTeamText() {
  const querySnapshot = await getDocs(query(collection(db, 'texts'), where('id', '==', 'teamView')));
  let texts = [];
  querySnapshot.forEach((doc) => {
    texts.push(doc.data());
  });
  return texts;
}



async function editText(id, text) {
  const docRef = doc(db, 'texts', id);
  await deleteDoc(docRef);
  const addedDoc = await setDoc(doc(db, 'texts', id), text);
  return addedDoc;
}


export {
  app,
  getMember, getMembers, addMember, deleteMember, saveMember, getMemberId,
  getProjects, addProject, editProject, deleteProject, getProjectId,
  checkIfVerified, checkIfHead,
  getAllRoles, getAllTexts, editRoles, editText,
  getContactText, getJoinText, getTeamText
};