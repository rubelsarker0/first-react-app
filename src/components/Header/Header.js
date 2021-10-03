import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="py-3">
			<Container>
				<NavLink className="navbar-brand" activeClassName="active" to="/">
					<img alt="" src={logo} className="d-inline-block align-top" />
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<NavLink
							className="nav-link"
							activeClassName="active"
							exact
							to="/home"
						>
							Home
						</NavLink>
						<NavLink
							className="nav-link"
							activeClassName="active"
							to="/categories"
						>
							Categories
						</NavLink>
						<NavLink className="nav-link" activeClassName="active" to="/about">
							About
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
