import React from 'react';
import { Container, Row, Col, TextInput } from 'react-materialize';
import Profile from '../Profile/Profile';
import AddPost from '../Post/AddPost';
import SinglePost from '../Post/SinglePost';
import PostList from '../Post/PostList';

const Feed = () => {
  return (
    <Container>
      <Row>
        <Col className='' s={12} m={4} l={4}>
          <Profile />
        </Col>
        <Col className='' s={12} m={8} l={8}>
          <AddPost />
          <PostList />
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;