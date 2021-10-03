import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import MealDetail from '../MealDetail/MealDetail';
import './MealsDetails.css';

const MealDetails = () => {
	const { idMeal } = useParams();
	const [selectedMeal, setSelectedMeal] = useState([]);

	const getMealDetails = async () => {
		const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
		const response = await axios.get(url);
		setSelectedMeal(response.data.meals);
	};

	useEffect(() => {
		getMealDetails();
	}, []);

	return (
		<Container className="my-5">
			{selectedMeal.map((meal) => (
				<MealDetail key={meal.idMeal} meal={meal} />
			))}
		</Container>
	);
};

export default MealDetails;
