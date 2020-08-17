import { postRef } from '../firebase';

export default async () => {
  var data;
  // postRef.limitToLast(limit).once('value', (snapshot) => {
  await postRef.on('value', (snapshot) => {
    console.log(snapshot.value);
    data = snapshot.val();
  });

  return data;

};