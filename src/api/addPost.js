import { postRef } from '../firebase';

export default (uid, content) => {
  try {
    postRef.push({
      createdBy: uid,
      createdAt: new Date().toLocaleString(),
      content
    });
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }

}