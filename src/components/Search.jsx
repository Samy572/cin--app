import Card from '../components/Card';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const Search = () => {
	const [search, setSearch] = useState('final');
	const [movie, setMovie] = useState([]);
	const [goodBad, setGoodBad] = useState('');
	const apiKey = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=fr-FR`)
			.then((res) => setMovie(res.data.results));
	}, [search]);

	const selectValue = useRef();
	const sendSearch = (e) => {
		e.preventDefault();
		setSearch(selectValue.current.value);
	};

	return (
		<div>
			<div className="form-content">
				<form>
					<input ref={selectValue} type="search" placeholder="Entrez le titre d'un film" />
					<input onClick={(e) => sendSearch(e)} type="submit" value="Rechercher" />
				</form>
				<div className="container-btn">
					<button className="good" onClick={() => setGoodBad('goodToBad')}>
						Top <span>&uarr;</span>
					</button>
					<button className="bad" onClick={() => setGoodBad('badToGood')}>
						Flop<span>&darr;</span>
					</button>
				</div>
			</div>
			<div className="container">
				{movie
					.slice(0, 20)
					.sort((a, b) => {
						if (goodBad === 'goodToBad') {
							return b.vote_average - a.vote_average;
						} else if (goodBad === 'badToGood') {
							return a.vote_average - b.vote_average;
						}
					})
					.map((movie) => (
						<Card key={movie.id} movie={movie} />
					))}
			</div>
		</div>
	);
};

export default Search;
