import React from 'react';
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NewAccount from './../portfolio/components/NewAccount';
import './TestPage.css';

function TestPage() {
    return (
        <Container id="testPage">
            <NewAccount/>
        </Container>
    );
}

export default TestPage;
