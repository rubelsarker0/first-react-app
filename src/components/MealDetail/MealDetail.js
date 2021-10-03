import React, { useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './MealDetail.css';

const MealDetail = (props) => {
	const [readMore, setReadMore] = useState(false);
	const {
		strMeal,
		strArea,
		strCategory,
		strInstructions,
		strMealThumb,
		strTags,
		strIngredient1,
	} = props.meal;
	return (
		<Card className="meal-detail-card">
			<Row>
				<Col>
					<Card.Img src={strMealThumb} />
				</Col>
				<Col>
					<Card.Body>
						<Card.Title>{strMeal}</Card.Title>
						<Card.Text className="instructions">
							{readMore
								? strInstructions
								: `${strInstructions.substring(0, 400)}...`}
							<span
								className="read-more"
								onClick={() => setReadMore(!readMore)}
							>
								{readMore ? 'Show less' : 'Read more'}
							</span>
						</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Category: {strCategory}</ListGroupItem>
						<ListGroupItem>Origin: {strArea}</ListGroupItem>
						<ListGroupItem>
							Tags: {strTags ? strTags : `Not found!`}
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</Card>
	);
};

export default MealDetail;
