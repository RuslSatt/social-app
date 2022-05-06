import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {arrayUnion, collection, doc, getDocs, getFirestore, onSnapshot, updateDoc} from "firebase/firestore";

export const authApi = {
    createUserDb (email, password) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
    }
}

export const postApi = {
    getPostsDb () {
        const db = getFirestore();
        return  getDocs(collection(db, "users"));
    },
    getCommentPostsDb (elem) {
        const db = getFirestore();
        return onSnapshot(doc(db, "users", elem.id), (doc) => {
            return doc.data().newComment;
        });
    },
    addCommentPostsDb (elem, createdComment) {
        const db = getFirestore();
        const commentRef = doc(db, "users", elem.id);

        return updateDoc(commentRef, {
            newComment: arrayUnion(createdComment)
        })
    }
}