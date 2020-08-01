import React from 'react';
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TransactionsList, { Transaction } from './../portfolio/components/TransactionsList';
import './TestPage.css';

function TestPage() {
    return (
        <Container id="testPage">
            <TransactionsList/>
        </Container>
    );
}

export default TestPage;
