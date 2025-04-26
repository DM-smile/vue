import firebaseDB from '@/firebase-config'

import {
   doc,
   collection,
   getDocs,
   getDoc,
   addDoc,
   deleteDoc,
   updateDoc,
   query,
   where,
   startAfter,
   limit,
   orderBy,
   and,
} from 'firebase/firestore/lite'

class DbOperations {
   constructor(collectionTitle) {
      this.dbCollection = collection(firebaseDB, `/${collectionTitle}`)
   }
   getItemFromSnap(docSnap) {
      return {
         id: docSnap.id,
         ...docSnap.data(),
      }
   }
   getListFromSnapshot(snapshot) {
      const list = []
      snapshot.docs.forEach((doc) => {
         list.push(this.getItemFromSnap(doc))
      })
      return list
   }
   getQueryOptions(options, filter) {
      const queryOpt = []
      if (filter) queryOpt.push(filter)
      if (options?.orderBy) queryOpt.push(orderBy(options.orderBy, options.orderType ?? 'asc'))
      if (options?.page) {
         const limitNum = options?.limit ?? 5
         queryOpt.push(startAfter(options.page * limitNum))
         queryOpt.push(limit(limitNum))
      } else {
         if (options?.limit) queryOpt.push(limit(options?.limit))
      }
      return queryOpt
   }
   loadItemsList(options) {
      const queryOpt = this.getQueryOptions(options)
      return new Promise((resolve, reject) => {
         getDocs(query(this.dbCollection, ...queryOpt))
            .then((querySnapshot) => {
               resolve(this.getListFromSnapshot(querySnapshot))
            })
            .catch((error) => {
               reject(error)
            })
      })
   }
   //--------------
   loadItemById(id) {
      return new Promise((resolve, reject) => {
         getDoc(doc(this.dbCollection, id))
            .then((querySnapshot) => {
               if (querySnapshot.exists()) {
                  resolve(this.getItemFromSnap(querySnapshot))
               } else throw new Error('Items not exists')
            })
            .catch((error) => {
               reject(error)
            })
      })
   }
   addItem(item) {
      return new Promise((resolve, reject) => {
         addDoc(this.dbCollection, item)
            .then(() => {
               resolve(true)
            })
            .catch((error) => {
               reject(error)
            })
      })
   }
   deleteItem(id) {
      return new Promise((resolve, reject) => {
         deleteDoc(doc(this.dbCollection, id))
            .then(() => {
               resolve(true)
            })
            .catch((error) => {
               reject(error)
            })
      })
   }
   updateItem(itemId, data) {
      return new Promise((resolve, reject) => {
         const oldDocRef = doc(this.dbCollection, itemId)
         updateDoc(oldDocRef, data)
            .then(() => {
               resolve(true)
            })
            .catch((error) => {
               reject(error)
            })
      })
   }
   getItemById(itemId) {
      return new Promise((resolve, reject) => {
         const docRef = doc(this.dbCollection, itemId)
         getDoc(docRef)
            .then((docSnap) => {
               if (docSnap.exists()) resolve(docSnap.data())
               else resolve({})
            })
            .catch((error) => {
               reject(error)
            })
      })
   }
   loadFilteredData(
      {
         firstFieldTitle,
         firstCompareOperator,
         firstValueToCompare,
         secondFieldTitle,
         secondCompareOperator,
         secondValueToCompare,
      },
      options
   ) {
      const filter = and(
         where(firstFieldTitle, firstCompareOperator, firstValueToCompare),
         where(secondFieldTitle, secondCompareOperator, secondValueToCompare)
      )
      const queryOpt = this.getQueryOptions(options, filter)
      const q = query(this.dbCollection, ...queryOpt)
      return new Promise((resolve, reject) => {
         getDocs(q)
            .then((querySnapshot) => {
               resolve(this.getListFromSnapshot(querySnapshot))
            })
            .catch((error) => {
               reject(error)
            })
      })
   }
}
export default DbOperations
