import React from "react";

import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import lasana from "../../img/lasana.jpg";
import crepes from "../../img/crepes.jpg";
import borgar from "../../img/borgar.jpg";

const CardSelection = () => {
	return (
		<CardGroup className="card-group">
			<Card className="card">
				<Card.Img variant="top" src={lasana} />
				<Card.Body>
					<Card.Title>
						{" "}
						<strong> Lasaña de Boloñesa de Lentejas </strong>{" "}
					</Card.Title>
					<Card.Text>
						{" "}
						La boloñesa de lentejas es un clásico. Aunque se suele
						preparar la de soja texturizada, la boloñesa de lentejas
						es un recurso fantástico. Es rico en proteína y los
						ingredientes para prepararlo lo tienes en todos los
						supermercados.
					</Card.Text>
					<Button variant="flat" active>
						Read more
					</Button>
				</Card.Body>
			</Card>

			<Card className="card">
				<Card.Img variant="top" src={borgar} />
				<Card.Body>
					<Card.Title>
						{" "}
						<strong>Hamburguesa de Garbanzos</strong>{" "}
					</Card.Title>
					<Card.Text>
						{" "}
						Hoy os traemos otra de esas recetas para desmentir que
						la alimentación vegana es cara. Esta receta es de las
						más baratas del blog, porque sus ingredientes
						principales son vegetales y legumbres, los alimentos más
						baratos del supermercado.{" "}
					</Card.Text>
					<Button variant="flat" active>
						Read more
					</Button>
				</Card.Body>
			</Card>

			<Card className="card">
				<Card.Img variant="top" src={crepes} />
				<Card.Body>
					<Card.Title>
						{" "}
						<strong>Crepes de Vainilla </strong>
					</Card.Title>
					<Card.Text>
						{" "}
						Uno de esos desayunos para conquistar corazones,
						estómagos y todo: unas tremendas creppes veganas sabor
						vainilla en la masa y con un relleno facilísimo, mucha
						crema de frutos secos.{" "}
					</Card.Text>
					<Button variant="flat" active>
						Read more
					</Button>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};

export default CardSelection;
