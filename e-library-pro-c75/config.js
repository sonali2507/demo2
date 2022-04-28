import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAkp3gQdHbMPD5pCfHbBzIIgFpdCJXD5KM",
//   authDomain: "wily-app-v2.firebaseapp.com",
//   projectId: "wily-app-v2",
//   storageBucket: "wily-app-v2.appspot.com",
//   messagingSenderId: "772559744213",
//   appId: "1:772559744213:web:9417b879882f231175065c",
//   measurementId: "G-H8Y352W6Z2"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAhWzlRuOE7CPy_WJbiGkktYxWIK115mWw",
  authDomain: "class71-ad55c.firebaseapp.com",
  projectId: "class71-ad55c",
  storageBucket: "class71-ad55c.appspot.com",
  messagingSenderId: "835508275113",
  appId: "1:835508275113:web:ca330016d30b1cb290e6b8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
