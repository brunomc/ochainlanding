import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Title from '../Title';
import Globals from '../../utils/Globals';
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
       <StickyHeader
        header={
                  <Navbar color="faded" style={{backgroundColor: Globals.colors.white}} light>
                      <NavbarBrand href="/" className="mr-auto"><Title/></NavbarBrand>
                      <NavbarToggler onClick={this.toggleNavbar} className="mf-2" />
                      <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                          <NavItem>
                            <NavLink href="#mercado" onClick={()=>{this.toggleNavbar()}}>Mercado</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#ochain" onClick={()=>{this.toggleNavbar()}}>Ochain</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#" onClick={()=>{this.toggleNavbar()}}>Quem Somos?</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#" onClick={()=>{this.toggleNavbar()}}>Contato</NavLink>
                          </NavItem>
                        </Nav>
                      </Collapse>
                    </Navbar>
                  
                }>

          </StickyHeader>
    );
  }
}