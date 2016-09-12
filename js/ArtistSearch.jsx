import React from 'react';

import ArtistResult from './ArtistResults'
import ArtistsPaginator from './ArtistsPaginator'
import SearchForm from './SearchForm'

const ArtistSearch = () => (
	<div className="container">
		<SearchForm />
		<ArtistResult caption="Metallica" image="https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91" />
		<ArtistsPaginator />
	</div>
);

export default ArtistSearch;
