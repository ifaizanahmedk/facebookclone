import { userRef } from "../firebase"

export default userDetails => {
  userRef
    .child(postKey)
    .set({
      firstName: '',
      lastName: '',
      email: '',
    })
    .then((data) => {
      console.log(data);
      return { message: 'Post removed successfully!' }
    })
    .catch((err) => {
      return { error: err.message }
    })
}