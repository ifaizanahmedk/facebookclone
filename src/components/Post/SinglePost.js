import React, { useState, useEffect } from 'react';
import { Dropdown, Icon, Button } from 'react-materialize';
import { userRef } from '../../firebase';
import moment from 'moment';
import deletePost from '../../api/deletePost';

export default ({ details, myUID }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const getName = () => {
      userRef
        .child(details.createdBy)
        .once('value', (snapshot) => {
          setFirstName(snapshot.val()['firstName']);
          setLastName(snapshot.val()['lastName']);
        })
    }

    if (details && details.createdBy) {
      getName();
    }
  }, []);

  const onPostDelete = (postKey) => {
    const result = deletePost(postKey);
    console.log(result);
  }

  return (
    <div>
      <div className='outerBox' style={{ width: '100%', marginBottom: 25, }}>
        <div>
          <div>
            <div style={{ display: 'flex', marginBottom: 10 }}>
              <div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    overflow: 'hidden',
                  }}>
                  <img
                    src='https://img.icons8.com/color/344/circled-user-male-skin-type-7.png'
                    alt='profile photo'
                    height='100%'
                  />
                </div>
              </div>
              <div style={{ marginLeft: 10, flex: 1 }}>
                <div
                  style={{
                    color: '#385898',
                    fontWeight: 600,
                  }}>
                  {firstName} {lastName}
                </div>
                <div style={{ fontSize: 12, color: 'gray' }}>
                  {moment(details.createdAt).fromNow()}
                </div>
              </div>
              {myUID === details.createdBy && (
                <div>
                  <Dropdown
                    options={{
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      container: null,
                      coverTrigger: true,
                      hover: true,
                      inDuration: 150,
                      onCloseEnd: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250,
                    }}
                    trigger={
                      <Button flat node='button'>
                        <Icon>more_vert</Icon>
                      </Button>
                    }
                  >
                    <a href='#' style={{ color: 'black' }}>
                      Edit
                    </a>
                    <a
                      href='#'
                      style={{ color: 'black' }}
                      onClick={(e) => {
                        e.preventDefault();
                        onPostDelete(details.postKey);
                      }}>
                      Delete
                  </a>
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
          <div>
            {details && details.content ?
              details.content : ''}
          </div>
        </div>
      </div>
    </div>
  );
};