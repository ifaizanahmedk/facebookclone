import React, { useState } from 'react';
import { Icon } from 'react-materialize';

export default () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className='outerBox m10' style={{ width: '100%', marginBottom: 25, }}>
      {editMode ?
        (<div>In edit mode <span onClick={() => { setEditMode(false) }}>Back</span></div>) :
        (<div>
          <div style={{
            display: 'flex',
            marginBottom: 10,
          }}>
            <div>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 30,
                overflow: 'hidden'
              }}>
                <img
                  src='https://img.icons8.com/color/344/circled-user-male-skin-type-7.png'
                  alt='profile photo'
                  height='100%' />
              </div>
            </div>
            <div style={{
              marginLeft: 10, flex: 1,
            }}>Faizan Ahmed</div>
            <div style={{ cursor: 'pointer' }}
              onClick={() => setEditMode(true)}>
              <Icon>edit</Icon>
            </div>
          </div>
          <div style={{ borderTop: '1px solid lightgray' }}>
            <div
              style={{ color: 'darkblue', fontFamily: 'fantasy', marginTop: 10 }}
            >
              About me:
        </div>
            <div style={{ fontSize: 12 }}>
              Software Engineer, tech geek learning new techniques and languages.
            </div>
          </div>
        </div>
        )}
    </div>
  );
};