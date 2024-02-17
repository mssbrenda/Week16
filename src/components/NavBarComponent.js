import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";



function NavBarComponent() {

const handleAddMovieSelect =() => {
  //navigate to the add Movie Page
window.location.href = '/AddMovie';

}
const handleAboutSelect = () => {

//navigate to the bout page 

window.location.href = '/AboutPage';

}





  return (
    <>
      <NavBar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Nav className="mr-auto">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="nav-link"
              onSelect={() => console.log("Home Selected")}
            >
              Home
            </NavLink>
          </Nav>
          <br />
          <Nav className="'mr-auto">
            <Nav.Link
              to="/AddMovie"
              activeClassName="active"
              className="nav-link"
              onClick={handleAddMovieSelect}
            >
              AddMovie
            </Nav.Link>
          </Nav>
          <br />
          <Nav className="mr-auto">
            <Nav.Link
            to='/AboutPage'
            activeClassName='active'
            className="nav-link"
            onClick={handleAboutSelect}>About</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </>
  );
}

export default NavBarComponent;
