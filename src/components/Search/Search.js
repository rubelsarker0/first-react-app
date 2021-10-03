import React from 'react';
import { Container, FormControl } from 'react-bootstrap';
import './Search.css';

const Search = (props) => {
	const { handleSearchInput, onKeyDownSearchHandler, searchMeal } = props;
	return (
		<main className="main-container py-3">
			<Container className="text-center">
				<FormControl
					className="w-50 mx-auto"
					placeholder="Search meals"
					aria-label="Search meals"
					aria-describedby="search meals area"
					onChange={handleSearchInput}
					onKeyDown={onKeyDownSearchHandler}
					value={searchMeal}
				/>
			</Container>
		</main>
	);
};

export default Search;
