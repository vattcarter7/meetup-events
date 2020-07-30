import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAmC78ZjW4wiL9Knb-t9vjTVlMzbpVxM7U',
  authDomain: 'meetup-events-284815.firebaseapp.com',
  databaseURL: 'https://meetup-events-284815.firebaseio.com',
  projectId: 'meetup-events-284815',
  storageBucket: 'meetup-events-284815.appspot.com',
  messagingSenderId: '310870874207',
  appId: '1:310870874207:web:16308ae9b33e0b8512e3ea',
  measurementId: 'G-XT02MES452'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
