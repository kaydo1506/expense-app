import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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
