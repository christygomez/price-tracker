import React from 'react';
import SearchCard from './SearchCard';

const SearchList = ({ results, addProduct }) => {
	const resultList = results.map(
		({ title, id, image, link, merchant, price }) => (
			<SearchCard
				id={id}
				image={image}
				link={link}
				merchant={merchant}
				price={price}
				title={title}
				addProduct={addProduct}
			/>
		)
	);

	return (
		<div>
			<h3>I AM SEARCH LIST</h3>
			{resultList}
		</div>
	);
};

export default SearchList;
