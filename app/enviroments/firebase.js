import firebase from '@firebase/app';
import '@firebase/auth';

const config ={
  apiKey: 'AIzaSyACRM1C0hkrjIpQ_tm6NKLAry8mg3l8Euc',
    authDomain: 'fir-demo-4b1a8.firebaseapp.com',
    databaseURL: 'https://fir-demo-4b1a8.firebaseio.com',
    projectId: 'fir-demo-4b1a8',
    storageBucket: 'fir-demo-4b1a8.appspot.com',
    messagingSenderId: '305795204268',
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
