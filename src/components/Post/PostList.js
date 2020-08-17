import React, { useEffect, useState } from 'react';
import { postRef, firebaseApp } from '../../firebase';
import SinglePost from './SinglePost';

export default () => {

  const [posts, setPosts] = useState([]);

  const [myUID, setMyUID] = useState('');

  useEffect(() => {
    const getAllPosts = () => {
      // const result = await getPosts();
      // console.log(result);

      postRef.on('value', (snapshot) => {
        console.log(snapshot.val());

        var fetchedPosts = [];

        snapshot.forEach(singlePost => {
          fetchedPosts.push({
            ...singlePost.val(),
            postKey: singlePost.key,
          })
        });

        const uid = firebaseApp.auth().currentUser.uid;
        setMyUID(uid);
        fetchedPosts.reverse();
        setPosts(fetchedPosts);

      })
    }
    getAllPosts();
  }, [])
  return (
    <div>
      {posts ?
        posts.map((singlePost, index) => {
          return <SinglePost key={index} details={singlePost} myUID={myUID} />
        }) : <p>No Posts to show, Post List is empty</p>}
    </div>
  )
}