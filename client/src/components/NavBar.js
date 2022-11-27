import React from 'react';
import { Context } from '..';
import { useContext } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav.Link style={{color:'white'}} to={SHOP_ROUTE}>Купи девайс</Nav.Link>
                {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} className='me-2'>Админ панель</Button>
                    <Button variant={'outline-light'} >Войти</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav> }
            </Container>
        </Navbar>
    );
})

export default NavBar;
