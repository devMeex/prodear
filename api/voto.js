import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";


const addVoto = async ({ userId, legajo, fullname, email, fixture }) => {
    try {
      await addDoc(collection(db, "voto"), {
        user: userId,
        fullname,
        legajo,
        email,
        fixture,
        createdAt: new Date().getTime(),
      });
    } catch (err) {}
  };
  
  const toggleVotoScore = async ({ docId, fixture }) => {
    try {
      const todoRef = doc(db, "voto", docId);
      await updateDoc(todoRef, {
        fixture,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const deleteVoto = async (docId) => {
    try {
      const todoRef = doc(db, "voto", docId);
      await deleteDoc(todoRef);
    } catch (err) {
      console.log(err);
    }
  };


  export {addVoto, toggleVotoScore, deleteVoto}