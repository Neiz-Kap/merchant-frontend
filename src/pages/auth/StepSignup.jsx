import React from 'react';
import logo from './../../img/logo.png';
import { Container, Form, Button } from 'react-bootstrap';
import './StepSignup.css';
import finishReg from './../../img/finishReg.png';

export default class StepSignup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
        };
    }

    nextStep = (e) => {
        e.preventDefault(); 
        this.setState({ step: this.state.step + 1 });
    }

    prevStep = (e) => {
        e.preventDefault();
        this.setState({ step: this.state.step - 1 });
    }

    steps = [
        (
            <div className="step-auth-block">
                <h1>Создать аккаунт</h1>
                <h5 className="secondary light pseudo-black-text  padding-vert-18">Пожалуйста, войдите в свой аккаунт, если желаете использовать все наши премиальные продукты</h5>
                <Form className="step-auth-form">
                    <Form.Group className="emailInput" controlId="formEmail">
                        <Form.Label>Ваша почта</Form.Label>
                        <Form.Control type="email" placeholder="example@gmail.com" />
                    </Form.Group>

                    <Form.Group className="passwordInput padding-vert-30" controlId="formPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Form.Group className="passwordInput" controlId="formPassword">
                        <Form.Label>Подтвердите пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Form.Group className="checkBoxInput flex-space-btw padding-vert-30" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Сохранить пароль" />
                        <p className="center secondary">Есть аккаунт? <a href="">Авторизоваться</a></p>
                    </Form.Group>
                    <p className="center secondary proceed-reg"><a href="" onClick={ this.nextStep }>Продолжить регистрацию <i class="las la-chevron-circle-right"></i></a></p>
                </Form> 
            </div>
        ),
        (
            <div className="step-auth-block">
                <h1>Персональные данные</h1>
                <h5 className="secondary light pseudo-black-text  padding-vert-18">Пожалуйста, войдите в свой аккаунт, если желаете использовать все наши премиальные продукты</h5>
                <Form className="step-auth-form">
                    <Form.Group controlId="formAddress">
                        <Form.Label>Адрес</Form.Label>
                        <Form.Control type="text" placeholder="Введите ваш адрес" />
                    </Form.Group>
                    <div className="flex-space-btw padding-vert-30">
                        <Form.Group className="width-48ps" controlId="formCity">
                            <Form.Label>Город</Form.Label>
                            <Form.Control type="text" placeholder="Введите ваш город" />
                        </Form.Group>
                        <Form.Group className="width-48ps" controlId="formZip">
                            <Form.Label>Почтовый индекс</Form.Label>
                            <Form.Control type="text" placeholder="Введите почтовый индекс" />
                        </Form.Group>
                    </div>
                    <Form.Group controlId="formState">
                        <Form.Label>Страна</Form.Label>
                        <Form.Control as="select">
                            <option>ЛНР</option>
                            <option>Украина</option>
                            <option>Россия</option>
                            <option>Беларусь</option>
                            <option>Казахстан</option>
                        </Form.Control>
                    </Form.Group>
                    <div className="flex-space-btw padding-top-30">
                        <p className="center secondary"><a href="" onClick={this.prevStep}>Вернуться</a></p>
                        <p className="center secondary proceed-reg"><a href="" onClick={this.nextStep}>Продолжить</a></p>
                    </div>
                </Form>
            </div>
        ),
        (
            <div className="step-auth-block">
                <h1>Подробная информация</h1>
                <h5 className="secondary light pseudo-black-text  padding-vert-18">Пожалуйста, войдите в свой аккаунт, если желаете использовать все наши премиальные продукты</h5>
                <Form className="step-auth-form">
                    <Form.Group controlId="formPlan">
                        <Form.Label>Выберите свой план</Form.Label>
                        <div className="step2-btn flex-space-btw">
                            <Button variant="primary">Индивидуальный</Button>
                            <Button variant="primary">Малый бизнес</Button>
                            <Button variant="primary">Корпорация</Button>
                        </div>
                    </Form.Group>
                    <Form.Group className="padding-vert-30" controlId="formState">
                        <Form.Label>Выберите основную учетную запись</Form.Label>
                        <Form.Control as="select">
                            <option>Visa</option>
                            <option>MasterCard</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCity">
                        <Form.Label>Введите номер телефона</Form.Label>
                        <Form.Control type="text" placeholder="Введите номер телефона" />
                    </Form.Group>
                    <div className="flex-space-btw padding-top-30">
                        <p className="center secondary"><a href="" onClick={this.prevStep}>Вернуться</a></p>
                        <p className="center secondary proceed-reg"><a href="" onClick={this.nextStep}>Финиш</a></p>
                    </div>
                </Form>
            </div>
        ),
        (
            <div className="step-auth-block flex-center flex-dir-col">
                <img src={finishReg}></img>
                <h1>Регистрация завершена!</h1>
                <h5 className="secondary light pseudo-black-text padding-vert-18">Пожалуйста, войдите в свой аккаунт, если желаете использовать все наши премиальные продукты</h5>
                <p className="center secondary proceed-reg"><a href="">Перейти в личный кабинет</a></p>
            </div>
        )
    ];

    render() {
        const step = this.state.step;

        return (
            <div className="step-wrapper-bg flex-center">
                <div className="step-auth-content">
                    <img className="step-auth-logo" src={logo} alt="Лого" />
                    {this.steps[step]}
                    <h5 className="step-auth-count">{ step + 1 }<span>/{ this.steps.length }</span></h5>
                    <div className="step-block-line">
                        <div className="step-line width-33ps"></div>
                        <div className="step-circle-block">
                            <div className="step-circle"></div>
                            <div className="step-circle opacity-0"></div>
                            <div className="step-circle opacity-0"></div>
                            <div className="step-circle opacity-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
