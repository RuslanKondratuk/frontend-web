import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/consts';


const Auth = () => {
    return (
            <Container
                className='d-flex justify-content-center align-items-center'
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className='p-5'>
                    <h2 className='m-auto'>Авторизация</h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control
                            className='mt-3'
                            placeholder='Введите ваш email...'
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='Введите ваш пароль...'
                        />
                        <Row className='d-flex flex-nowrap justify-content-between mt-3'>
                            <div style={{width: '60%'}}>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            <Button
                                variant={'outline-success'}
                                style={{width: 100}}
                            >
                                Войти
                            </Button>
                        </Row>

                    </Form>
                </Card>

            </Container>
    );
}

export default Auth;

