import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';
const Favoris = () => {
	const [favoris, setFavoris] = useState([]);
	const apiKey = import.meta.env.VITE_API_KEY;
	useEffect(() => {
		let movieId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
		for (let i = 0; i < movieId.length; i++) {
			axios
				.get(`https://api.themoviedb.org/3/movie/${movieId[i]}?api_key=${apiKey}&language=fr-FR`)
				.then((res) => setFavoris((favoris) => [...favoris, res.data]));
		}
	}, []);

	return (
		<div>
			<Header />
			<h2>
				Favoris <span>🧡</span>
			</h2>
			<div className="container">
				{favoris.length > 0 ? (
					favoris.map((movie) => <Card key={movie.id} movie={movie} />)
				) : (
					<h2>Ajouter des films en favoris</h2>
				)}
			</div>
		</div>
	);
};

export default Favoris;
