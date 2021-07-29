import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import logoVengan from "../../img/logoVengan.png";

const Navart = () => {
	return (
		<Navbar id="navBardFood" expand="lg">
			<Navbar.Brand href="#">
				<img
					src={logoVengan}
					className="offset-1 imgLogo d-inline-block align-top"
					alt="logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
				<Nav
					className="mr-auto my-2 my-lg-0"
					style={{ maxHeight: "100px" }}
					navbarScroll>
					<Nav.Link href="#action1">Home</Nav.Link>
					<Nav.Link href="#action2">Conócenos</Nav.Link>
					<NavDropdown title="Menús" id="navbarScrollingDropdown">
						<NavDropdown.Item href="#action3">
							Entrantes
						</NavDropdown.Item>
						<NavDropdown.Item href="#action4">
							Plato principal
						</NavDropdown.Item>
						<NavDropdown.Item href="#action5">
							Postres
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action6">
							Ver todo
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#" disabled></Nav.Link>
				</Nav>
				<Form className=" offset-7 d-flex">
					<FormControl
						type="search"
						placeholder="Buscar receta"
						className="mr-2"
						aria-label="Search"
					/>
					<Button variant="outline-success">Buscar</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default Navart;
