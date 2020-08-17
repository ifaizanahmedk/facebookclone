import { firebaseApp, userRef } from '../firebase';

export default ({ email, password, firstName, lastName }) => {
  if (!firstName || !lastName) {
    return false;
  }

  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {

      console.log(data.user.uid);
      console.log('User Added to DB');

      userRef.child(data.user.uid).set({
        firstName,
        lastName,
        email,
      });

      return true;

    }).catch((err) => {

      console.log(err.message);
      return false;

    });
}