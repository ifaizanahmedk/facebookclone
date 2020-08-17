import React, { useState } from 'react';
import { Textarea, Button, Row } from 'react-materialize';
import { firebaseApp } from '../../firebase';
import addPost from '../../api/addPost';

export default () => {

  const [content, setContent] = useState('');

  const addAPost = () => {
    if (!content) {
      return;
    }

    if (content.length > 120) {
      return;
    }

    const uid = firebaseApp.auth().currentUser.uid;
    const postOutput = addPost(uid, content);

    if (postOutput === true) {
      setContent('');
      console.log('Post Added Successfully!')
    }

    if (postOutput === false) {
      console.log('Post Added Failed!')
    }
  }

  return (
    <div>
      <div className='outerBox m10' style={{ width: '100%', marginBottom: 25, }}>
        <h6 style={{ fontWeight: '500' }}>What's in your mind?</h6>
        {content}
        <Row style={{ marginBottom: 0 }}>
          <Textarea
            value={content}
            s={12}
            className='custom-textArea'
            placeholder='Please write here...'
            data-length={120}
            onChange={(event) => { setContent(event.target.value) }}
          />
        </Row>
        <div>
          <Button
            small
            waves='light'
            style={{
              backgroundColor: 'royalblue',
            }}
            onClick={addAPost}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  )
}