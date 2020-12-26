import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import * as IoIcons from 'react-icons/io';

function KillSession(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.clear();
};

function NavHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand><img alt="" src="/assets.svg" width="30" height="30" className="d-inline-block align-top"/>
        {' '}
        Asset Management System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
            <Nav.Link  href='/sign-in' onClick={KillSession}><IoIcons.IoMdLogOut />Logout</Nav.Link></Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}
export default NavHeader