import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import { userRef, firebaseApp } from './firebase';
import signUp from './api/signUp';
import signIn from './api/signIn';
import { SignIn } from './components/SignIn';
import Feed from './components/Feed/Feed';
import { Header } from './components/common/Header';
import { SignUp } from './components/SignUp';

function App() {
  // useEffect(() => {
  //   function callFunc() {
  //     //set
  //     //push
  //     userRef.push({
  //       email: 'test@gmail.com',
  //       password: '12345678',
  //     });
  //   }
  //   // callFunc();
  // }, []);

  const [stage, setStage] = useState('');
  const [signState, setSignState] = useState('signin');

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('User Logged In: ', user.uid);
        setStage('loggedIn');
        setSignState('signin');
      } else {
        console.log('No User Logged In');
        setStage('notLoggedIn');
      }
    });
  });

  const changeSignState = (value) => {
    setSignState(value);
  }

  // const onSignUp = () => {
  //   const result = signUp('faizanahmed@gmail.com', 'password', 'Faizan', 'Ahmed');
  //   console.log(result);
  // }

  // const onSignIn = () => {
  //   const result = signIn('faizanahmed@gmail.com', 'password');
  //   console.log(result);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header stage={stage} />
          {stage === 'loggedIn' && <Feed />}
          {stage === 'notLoggedIn' &&
            signState === 'signin' &&
            <SignIn changeSignState={changeSignState} />}
          {stage === 'notLoggedIn' &&
            signState === 'signup' &&
            <SignUp changeSignState={changeSignState} />
          }
          {/* <Route path='/' exact component={SignUp} />
          <Route path='/signin' component={SignIn} /> 
          <Link to='/signin'>SignIn</Link> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
