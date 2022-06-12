import {getFirestore, getDoc, doc, getDocs, collection, query, where} from "firebase/firestore"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxcHBsnThNtHYDP7hJPYFMw-ICASfTlJE",
  authDomain: "curso-react-coder-ca.firebaseapp.com",
  projectId: "curso-react-coder-ca",
  storageBucket: "curso-react-coder-ca.appspot.com",
  messagingSenderId: "384957564681",
  appId: "1:384957564681:web:7d99f0beba071dc033b5d8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()

    export function getProduct(collectionName, id){
        const productRef = doc(db, collectionName, id)
      
        const product = getDoc(productRef).then((snapshot) =>{
                if(snapshot.exists()){
                   return({id:snapshot.id, ...snapshot.data()})
                }
            })
            return(product)
        }


export function getProducts(collectionName, categoryId){
    if(categoryId){
        const queryFilter =
        query(
            collection(db, "productos"),
            where("category", "==", categoryId)
        );
        const products = getDocs(queryFilter).then((snapshots) =>{
            return(snapshots.docs.map((doc)=> ({id:doc.id, ...doc.data()})))
            })
            return(products)
    }else{

        const productsRef = collection(db, collectionName)
        const products = getDocs(productsRef).then((snapshots) =>{
            return(snapshots.docs.map((doc)=> ({id:doc.id, ...doc.data()})))
            })
            return(products)
        
    }  
}