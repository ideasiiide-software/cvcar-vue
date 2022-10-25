import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDLHu6j2mkV3oFOP7XGyrRzEGbzsgrlUu0",
  authDomain: "cvcar-62fca.firebaseapp.com",
  databaseURL: "https://cvcar-62fca.firebaseio.com",
  projectId: "cvcar-62fca",
  storageBucket: "cvcar-62fca.appspot.com",
  messagingSenderId: "673622590458",
  appId: "1:673622590458:web:74740c012cc2025a06da43",
  measurementId: "G-R0WGHZG97C"
}

firebase.initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig, "firebaseSecondary")

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe()
          resolve(user)
      }, reject)
  })
}

const auth = firebase.auth()
const authGuest = firebase.apps[1].auth()

export { auth, authGuest, firebase }