import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3 className="text-dark font-weight-bold">
						Top 10 Mejores Restaurantes Veganos de España
					</h3>
					<p className="text-dark font-weight-bold">
						¡Descubre los mejores sitios para degustar de comida
						vegana en todo el país!
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1622622008494-60c9e6b41996?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3 className="text-dark font-weight-bold">
						Tartas Veganas
					</h3>
					<p className="text-dark font-weight-bold">
						Estas tartas no pueden faltar para ninguna ocasión
						especial ¡Mira Nuestras Recetas!
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1550335430-182e6165c01c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Formas Maravillosas para Empezar el Día</h3>
					<p>
						¡Mira nuestras sugerencias y recetas veganas perfectas
						para comenzar el dia!
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default ControlledCarousel;
