import React from "react";
import Form from "react-bootstrap/Form";

const Footermagic = () => {
	return (
		<Form className="inputForm">
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Suscríbete a nuestra Newsletter </Form.Label>
				<Form.Control type="email" placeholder="name@vegandaily.com" />
			</Form.Group>
			<Form.Group
				className="mb-3"
				controlId="exampleForm.ControlTextarea1">
				<Form.Label>Déjanos un comentario</Form.Label>
				<Form.Control as="textarea" rows={3} />
			</Form.Group>
		</Form>
	);
};

export default Footermagic;
