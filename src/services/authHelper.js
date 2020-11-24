import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'

const init = (config) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  firebase.analytics();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() =>{
      console.log("Persistence set");
    })
    .catch(err => {
      console.log(err)
    })
}

const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

const getUser = () => {
  return firebase.auth.currentUser
}

const signout = () => {
  return firebase.auth().signOut()
}

const writeUserData = (userId, fname, lname, place) => {
  firebase.database().ref('users/' + userId).set({
    fname: fname,
    lname: lname,
    place: place
  })
}

const readUserData = (userId) => {
  return firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
    return {
      fname: (snapshot.val() && snapshot.val().fname) || '',
      lname: (snapshot.val() && snapshot.val().lname) || '',
      place: (snapshot.val() && snapshot.val().place) || ''
    }
  })
}

export default { init, createUser, login, getUser, signout, writeUserData, readUserData }