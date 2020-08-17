import { postRef } from "../firebase"

export default (postKey) => {
  postRef
    .child(postKey)
    .remove()
    .then((data) => {
      console.log(data);
      return { message: 'Post removed successfully!' }
    })
    .catch((err) => {
      return { error: err.message }
    })
}