import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';
import Search from '../Search/Search';

const Home = () => {
	const [searchMeal, setSearchMeal] = useState('');
	const [userMeals, setUserMeals] = useState([]);

	const getUserMeals = async () => {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;
		const response = await axios.get(url);
		setUserMeals(response.data.meals);
	};

	const handleSearchInput = (event) => {
		setSearchMeal(event.target.value);
	};

	const onKeyDownSearchHandler = (event) => {
		if (event.key === 'Enter') {
			getUserMeals();
			setSearchMeal('');
		}
	};

	return (
		<div>
			<Search
				handleSearchInput={handleSearchInput}
				onKeyDownSearchHandler={onKeyDownSearchHandler}
				searchMeal={searchMeal}
			></Search>
			<Container className="my-5">
				<div className="found-meals text-center fs-4 bg-primary text-white p-3 my-4">
					{userMeals.length === 0
						? `Please search your meal`
						: `Meals found: ${userMeals.length}`}
				</div>
				<Row xs={1} md={3} className="g-4">
					{userMeals.map((meal) => (
						<Meals key={meal.idMeal} meal={meal} />
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Home;
