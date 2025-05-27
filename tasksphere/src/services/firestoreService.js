// src/services/firestoreService.js
import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Criar um novo Project
export const createProject = async (project) => {
  await addDoc(collection(db, "projects"), project);

};

// Buscar Projects por usuário
export const getUserProjects = async (userId) => {
  const q = query(collection(db, "projects"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const q = query(
  collection(db, 'projects'),
  where('collaborators', 'array-contains', user.uid)
);
