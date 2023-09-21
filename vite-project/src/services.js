import { doc, getDoc, collection, getDocs, getFirestore, query, where, QuerySnapshot, addDoc } from "firebase/firestore";

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()
        const itemDoc = doc(db, "ProductList", id)
        getDoc(itemDoc)
            .then((doc) => {
                if (doc.exists()) {
                    resolve({ id: doc.id, ...doc.data() })
                } else {
                    resolve(null)
                }
            })
            .catch((error) => {
                reject(error)
            })
    })
};

export const getProducts = (category) => {
    return new Promise((resolve) => {
        const db = getFirestore()
        const itemCollection = collection(db, "ProductList")
        let q
        if (category) {
            q = query(itemCollection, where("category", "==", category))
        } else {
            q = query(itemCollection)
        }
        getDocs(q)
            .then((QuerySnapshot) => {
                const products = QuerySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(products)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const createOrder = (orden) => {
    const db = getFirestore ();
    const ordersCollection = collection (db, "orders");

    return addDoc (ordersCollection, orden);
}