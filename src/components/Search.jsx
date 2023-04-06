import React from 'react';

const Search = () => {
	return (
		<div>
			<form>
				<input type="search" placeholder="Entrez le titre d\un film" />
				<input type="sumbit" value="Rechercher" />
			</form>
			<div className="container-btn">
				<button>Top</button>
				<button>Flop</button>
			</div>
		</div>
	);
};

export default Search;
