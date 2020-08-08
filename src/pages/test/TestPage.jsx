import React from 'react';
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CardInfo from './../portfolio/components/CardInfo';
import './TestPage.css';

function TestPage() {
    return (
        <div id="testPage">
            <CardInfo/>
        </div>
    );
}

export default TestPage;
