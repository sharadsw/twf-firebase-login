import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'

const init = (config) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  firebase.analytics();
}

const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

const getUser = () => {
  firebase.auth().onAuthStateChanged(user => {
    return user ? user : null
  })
}

export default { init, createUser, login, getUser }