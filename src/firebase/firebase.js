import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, get, ref, set, remove } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db as default };

// onChildRemoved(ref(db, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// onChildChanged(ref(db, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

const expenses = [
    {
        description: 'Item 1',
        note: 'Some note',
        amount: 1000,
        createdAt: 120,
    },
    {
        description: 'Item 2',
        note: 'Another note',
        amount: 1001,
        createdAt: 120,
    },
    {
        description: 'Item 3 ',
        note: 'Yet another note',
        amount: 1020,
        createdAt: 120,
    },
];

// expenses.map((e) => {
//     push(ref(db, 'expenses'), e);
// });
// set(ref(db, 'test'), expenses);
// remove(ref(db, `test/${id}`));
// get(ref(db, 'expenses')).then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//         });
//     });
//     console.log(expenses);
// });

// onValue(ref(db, 'expenses'), (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//         });
//     });
//     console.log(expenses);
// });
