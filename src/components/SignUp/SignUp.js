import React, { useState } from 'react';
import { Container, Row, Col, TextInput, Button, Icon } from 'react-materialize';
import signUp from '../../api/signUp';

export const SignUp = (props) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const onSubmit = () => {
    const result = signUp(data);

    if (result === true) {
      console.log('Sign Up Successful!');
    } else if (result === false) {
      console.log('Sign Up Failed!');
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
      <Container className="signup">
        <Row>
          <Col s={12}>
            {/* {JSON.stringify(data)} */}
            <div className='outerBox'>
              <h4>Sign Up</h4>
              <TextInput label='First Name' onChange={(event) => onChangeText('firstName', event.target.value)} />
              <TextInput label='Last Name' onChange={(event) => onChangeText('lastName', event.target.value)} />
              <TextInput label='Email' onChange={(event) => onChangeText('email', event.target.value)} />
              <TextInput label='Password' onChange={(event) => onChangeText('password', event.target.value)} />
              <Button onClick={onSubmit} type='submit' waves='light' node='button'>Submit <Icon right>send</Icon></Button>
              <p>Already have an account? <span onClick={() => { props.changeSignState('signin') }}>Sign In</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};