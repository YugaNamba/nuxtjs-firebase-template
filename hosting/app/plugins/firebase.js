import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

if (!firebase.apps.length) {
  let config = {}
  if (location.hostname === 'localhost') {
    console.log('🏠 ローカル開発環境')
    config = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    }
  } else {
    console.log('🔥 Firebase ホスティング環境')
    config = JSON.parse(loadTextFileAjaxSync('/__/firebase/init.json', 'application/json'))
  }
  firebase.initializeApp(config)
}

const isEmulating = window.location.hostname === 'localhost'
if (isEmulating) {
  firebase.auth().useEmulator('http://localhost:9099/')
  firebase.app().functions().useEmulator('localhost', 5001)
  firebase.firestore().settings({ host: 'localhost:8080', ssl: false })
}

export default firebase

export const authProviders = {
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
}

export const auth = firebase.auth()
export const storage = firebase.storage()
export const functions = firebase.app().functions('asia-northeast1')
export const db = firebase.firestore()
export const firestore = firebase.firestore

const loadTextFileAjaxSync = (filePath, mimeType) => {
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', filePath, false)
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType)
    }
  }
  xmlhttp.send()
  if (xmlhttp.status === 200) {
    return xmlhttp.responseText
  } else {
    throw new Error('loadTextFileAjaxSync() response error', xmlhttp.status)
  }
}
