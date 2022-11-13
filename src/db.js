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


// data structure
// member -> name, role, profileImage
// head -> head -> members -> [member]
// teams -> toTheMoon -> name, description, coverImage, members -> [member]

const addHeadMember = async (member) => {
  const docRef = await addDoc(collection(db, 'head', 'headTeam', 'members'), {
    name: member.name,
    role: member.role,
    profileImage: member.profileImage
  });
  return docRef.id;
}

const deleteHeadMember = async (id) => {
  await deleteDoc(doc(db, 'head', 'headTeam', 'members', id));
  return id;
}

const addProject = async (project) => {
  const docRef = await addDoc(collection(db, 'teams'), {
    name: project.name,
    description: project.description,
    coverImage: project.coverImage,
    members: project.members
  });
  return docRef.id;
}

const addProjectMember = async (projectId, member) => {
  const docRef = await addDoc(collection(db, 'teams', projectId, 'members'), {
    name: member.name,
    role: member.role,
    profileImage: member.profileImage
  });
  return docRef.id;
}

const deleteProjectMember = async (projectId, id) => {
  await deleteDoc(doc(db, 'teams', projectId, 'members', id));
  return id;
}

const deleteProject = async (id) => {
  await deleteDoc(doc(db, 'teams', id));
  return id;
}

const getHead = async () => {
  const querySnapshot = await getDocs(collection(db, "head"));
  let head = [];
  querySnapshot.forEach((doc) => {
    for (let team in doc.data()) {
      for (let member in doc.data()[team]) {
        head.push(doc.data()[team][member]);
      }
    }
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
  addHeadMember, deleteHeadMember, 
  addProject, addProjectMember, 
  deleteProjectMember, deleteProject, 
  getHead, getProjects 
};