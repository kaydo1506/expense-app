import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBLWjl5vzN2ILAlYQSSIn5zN_WTAzgqAC0',
  authDomain: 'expensify-ify.firebaseapp.com',
  databaseURL: 'https://expensify-ify-default-rtdb.firebaseio.com',
  projectId: 'expensify-ify',
  storageBucket: 'expensify-ify.appspot.com',
  messagingSenderId: '637289568192',
  appId: '1:637289568192:web:998c291e689252156d1a25',
  measurementId: 'G-F3JL3GE1YE',
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database
//     .ref('something')
//     .set({
//         name: 'Andrew Mead',
//         age: 26,
//         stressLevel: 6,
//         job: {
//             title: 'Software developer',
//             company: 'Google',
//         },
//         location: {
//             city: 'Philadelphia',
//             country: 'United States',
//         },
//     })
//     .then(() => {
//         console.log('Data is saved!');
//     })
//     .catch((e) => {
//         console.log('This failed.', e);
//     });
