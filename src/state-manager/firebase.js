import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOAD7j2CHhWw4q4IWTo4wM84wT5ZPMoSQ",
  authDomain: "skillshare-classes.firebaseapp.com",
  databaseURL: "https://skillshare-classes.firebaseio.com",
  projectId: "skillshare-classes",
  storageBucket: "skillshare-classes.appspot.com",
  messagingSenderId: "412487642291",
  appId: "1:412487642291:web:a298d6309f6f06443814c6",
};
// Initialize Firebase only if it has not been done before
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
