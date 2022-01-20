import { doc, setDoc, collection, query, getDocs, deleteDoc, getDoc } from "firebase/firestore"
import { Alert } from "react-native";

export const saveContact = async (contact) => {
    await setDoc(doc(global.dbCon, "/contacts", contact.id), contact);
    getContacts(refreshFn);
}


export const getContacts = async (refreshFn) => {
    const queryContacts = query(collection(global.dbCon, "/contacts"));
    const querySnapshot = await getDocs(queryContacts);
    let contactsTmp = [];
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        contactsTmp.push(doc.data());
    });
    refreshFn(contactsTmp);

}

export const deleteContact = async (contact) => {
    deleteDoc(doc(global.dbCon, "/contacts", contact.id));
}

export const searchUser = async (text, refreshFn) => {
    const docRef = doc(global.dbCon, "/contacts", text);
    const docSnap = await getDoc(docRef);
    // text = text.toLowerCase();
    let contactsTmp = [];
    console.log("", text);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        contactsTmp.push(docSnap.data());
        getContacts(contactsTmp);
    } else {
        console.log("No such document!");
    }
    getContacts(contactsTmp);
    refreshFn(contactsTmp);

}