import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Meals.css';

const Meals = (props) => {
	const { idMeal, strMeal, strCategory, strArea, strMealThumb } = props.meal;

	return (
		<div>
			<Col className="h-100">
				<Card className="meal-card h-100">
					<Card.Img variant="top" src={strMealThumb} />
					<Card.Body>
						<Card.Title>{strMeal}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Category: {strCategory}</ListGroupItem>
						<ListGroupItem>Origin: {strArea}</ListGroupItem>
					</ListGroup>
					<Card.Footer className="text-center">
						<Link to={`/home/${idMeal}`}>
							<Button variant="primary">MEAL DETAILS</Button>
						</Link>
					</Card.Footer>
				</Card>
			</Col>
		</div>
	);
};

export default Meals;
