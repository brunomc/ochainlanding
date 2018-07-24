import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Scrollspy from 'react-scrollspy';
export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" expand dark pills>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mf-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#mercado">Mercado</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Ochain</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Quem Somos?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contato</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}