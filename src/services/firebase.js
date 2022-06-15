import {getFirestore, getDoc, doc, getDocs, collection, query, where, addDoc, runTransaction} from "firebase/firestore"

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

// Obtener producto unico desde Firebase
export function getProduct(collectionName, id){
    const productRef = doc(db, collectionName, id)
    
    const product = getDoc(productRef).then((snapshot) =>{
            if(snapshot.exists()){
                return({id:snapshot.id, ...snapshot.data()})
            }
        })
        return(product)
    }

// Obtener productos desde Firebase
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



// Enviar orden a Firebase
export function SendOrder(data, cartDetail, totalPrice, cart){
    const orderRef = collection(db, "orders")
    const order = {
        buyer: data,
        items: cartDetail,
        total: totalPrice,
      };
      const idRef = addDoc(orderRef, order)
      .then((item)=>{
        console.log("Felicidades tu compra fue registrada con el ID:" + item.id)
      updateProducts(cart); 
      return(item.id)
    });
      return(idRef)
}

const updateProducts = async (cart) => {
    cart.forEach( async (item) => {
      const productRef = doc(db, `productos`, item.id)
      await runTransaction(db, async (transaction) => {
      const transfDoc = await transaction.get(productRef);
      if (!transfDoc.exists()) {
        console.error("El documento no existe")
      }
      const newStock = transfDoc.data().stock - item.quantity;
      transaction.update(productRef, { stock: newStock });
    });
    })
  }
// function updateProducts(cart){
//     const batch = writeBatch(db)
//     cart.forEach(item => {
//         const productRef = doc(db, "productos", item.id)
//         batch.update(productRef, {stock: 1})      
//     });
//     batch.commit()
// }