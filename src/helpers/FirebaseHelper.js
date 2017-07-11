import { firebaseDatabase } from './firebase';

class FirebaseHelper {
  static isValidTeacherCode(teacherCode) {
    firebaseDatabase
      .ref('/users')
      .orderByChild('token')
      .equalTo(teacherCode)
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val().token);
      });
  }
}

export default FirebaseHelper;
