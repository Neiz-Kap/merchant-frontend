import React from 'react';
import logo from './../../img/logo.png';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import './AuthForm.css';

import { connect } from 'react-redux';

import { login } from '../../store/actions/authentication';

class SigninPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      remember: false,
      submitted: false,
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
        dispatch(login(email, password));
    }
  }

  render() {
    const { loggingIn, error } = this.props;
    const { email, password, submitted, remember } = this.state;

    return (
      <div className="auth-form-container">
        <Row>
          <Col className="white-bg">
          <div className="formBlock">
            <img className='logo' src={logo} alt="" />
            <div className="title">
              <h1>Войти в аккаунт</h1>
            </div>
            { error &&
                <p>{error.error}</p>
            }
            <Form className="auth-form" onSubmit={this.handleSubmit}>
              <Form.Group className="emailInput padding-vert-18" controlId="formEmail">
                <Form.Label>Ваша почта</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ваша почта" value={email} onChange={this.onInputChange} />
              </Form.Group>
  
              <Form.Group className="passwordInput" controlId="formPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control name="password" type="password" placeholder="Пароль" value={password} onChange={this.onInputChange} />
              </Form.Group>
              <Form.Group className="checkBoxInput flex-space-btw padding-vert-30" controlId="formBasicCheckbox">
                <Form.Check name="remember" type="checkbox" label="Сохранить пароль" value={remember} onChange={this.onInputChange} />
                <p className="center secondary"><a href="">Возобновить пароль</a></p>
              </Form.Group>
              <Button disabled={loggingIn} className="auth-form-button" variant="primary" type="submit">
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Войти
              </Button>
            </Form>
            <p className="center secondary">Нет аккаунта? <a href="">Создать</a></p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log(state)
  const { loggingIn, error } = state.authReducer;

  return {
      loggingIn,
      error
  };
}

const connectedLoginPage = connect(mapStateToProps)(SigninPage);
export default connectedLoginPage; 
