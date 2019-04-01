
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID
  })
}
const firebaseApp = firebase;

// const firebaseStore = firebase.firestore()
// firebaseStore.settings({ timestampsInSnapshots: true })

export default ({ app }, inject) => {

  inject('usersRef',
    firebaseApp.firestore().collection('users')
  )

  inject('provider',
    new firebase.auth.GoogleAuthProvider()
  )

  inject('firebaseApp',firebase)

  inject('firebaseStore', () => {
    return firebaseApp.firestore()
  })

  inject('firebaseAuth', () => {
    return firebaseApp.auth()
  })

  // ログイン判定プラグイン
  inject('firebaseAuthCheck', () => {
    return new Promise((resolve, reject) => {
      firebaseApp.auth().onAuthStateChanged(user => {
        resolve(user || false)
      })
    })
  })

}


