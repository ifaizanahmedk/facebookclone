import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Icon, NavItem, Container, Row, Col } from "react-materialize";
import { firebaseApp } from "../../../firebase";

export const Header = ({ stage }) => {
  return (
    <header className="header" style={{ backgroundColor: 'royalblue' }}>
      <Container>
        <Row>
          <Col s={12} m={12} l={12}>
            <Navbar
              alignLinks="right"
              brand={<a className="brand-logo"
                href="#"
                style={{
                  width: '6rem',
                  height: '100%',
                  padding: '10px 0',
                }}>
                <img
                  src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=50&h=50'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'left center',
                  }} />
              </a>}
              id="mobile-nav"
              menuIcon={<Icon>menu</Icon>}
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
              }}
              options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true,
              }}
            >
              {stage === 'loggedIn' && (
                < NavItem href="#" onClick={(event) => {
                  event.preventDefault();
                  firebaseApp.auth().signOut();
                }}>Log out</NavItem>
              )}
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header >
  );
}