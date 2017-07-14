import { firebaseAuth, firebaseDatabase } from '../helpers/firebase';

export const actionTypes = {
  listenToFirebaseAuth: 'LISTEN_FIREBASE_AUTH',
  authStarted: 'AUTH_STARTED',
  authFulfilled: 'AUTH_FULFILLED',
  authRejected: 'AUTH_REJECTED',
  logout: 'LOGOUT'
};

export const logout = () => {
  firebaseAuth.signOut();
  return { type: actionTypes.logout };
};
export const authStarted = () => ({ type: actionTypes.authStarted });
export const authFulfilled = user => ({
  type: actionTypes.authFulfilled,
  user
});
export const authRejected = error => ({
  type: actionTypes.authRejected,
  error
});
export const listenToFirebaseAuth = () => {
  return dispatch => {
    dispatch(authStarted());
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        const path = `users/${user.uid}`;
        const userData = Object.assign({}, user.providerData[0], {
          uid: user.uid
        });
        const userRef = firebaseDatabase.ref(path);
        dispatch(authFulfilled(userData));

        userRef.once('value').then(snapshot => {
          const val = snapshot.val();
          userRef.set({ ...val, ...userData });
        });
      } else {
        dispatch(authRejected(''));
      }
    });
  };
};
