import React, { useState } from 'react';
import { Container, Row, Col, Button, TextInput, Icon } from 'react-materialize';
import signIn from '../../api/signIn';

export const SignIn = (props) => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const onSubmit = () => {
    const result = signIn(data);

    if (result === true) {
      console.log('Sign In Successful!');
    } else if (result === false) {
      console.log('Sign In Failed!');
    }
  }

  const onChangeText = (key, value) => {
    const newData = {
      ...data
    };
    newData[key] = value;
    setData(newData);
  }

  return (
    <div>
      <Container className="signin">
        <Row>
          <Col s={12}>
            <div className='outerBox'>
              <h4>Sign In</h4>
              <TextInput label='Email' onChange={(event) => onChangeText('email', event.target.value)} />
              <TextInput label='Password' onChange={(event) => onChangeText('password', event.target.value)} />
              <Button onClick={onSubmit} type='submit' waves='light' node='button'>Submit <Icon right>send</Icon></Button>
              <p>Don't have an account? <span onClick={() => { props.changeSignState('signup') }}>Sign Up</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};