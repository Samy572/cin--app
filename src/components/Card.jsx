const Card = ({ movie }) => {
	const genreId = () => {
		const genre = [];

		for (let i = 0; i < movie.genre_ids.length; i++) {
			switch (movie.genre_ids[i]) {
				case 28:
					genre.push(`Action`);
					break;
				case 12:
					genre.push(`Aventure`);
					break;
				case 16:
					genre.push(`Animation`);
					break;
				case 35:
					genre.push(`Comédie`);
					break;
				case 80:
					genre.push(`Policier`);
					break;
				case 99:
					genre.push(`Documentaire`);
					break;
				case 18:
					genre.push(`Drame`);
					break;
				case 10751:
					genre.push(`Famille`);
					break;
				case 14:
					genre.push(`Fantasy`);
					break;
				case 36:
					genre.push(`Histoire`);
					break;
				case 27:
					genre.push(`Horreur`);
					break;
				case 10402:
					genre.push(`Musique`);
					break;
				case 9648:
					genre.push(`Mystère`);
					break;
				case 10749:
					genre.push(`Romance`);
					break;
				case 878:
					genre.push(`Science-fiction`);
					break;
				case 10770:
					genre.push(`Téléfilm`);
					break;
				case 53:
					genre.push(`Thriller`);
					break;
				case 10752:
					genre.push(`Guerre`);
					break;
				case 37:
					genre.push(`Western`);
					break;
				default:
					break;
			}
		}
		return genre.map((el, i) => <li key={i}>{el}</li>);
	};

	const dateFormat = (date) => {
		let [yy, mm, dd] = date.split('-');
		return [dd, mm, yy].join('/');
	};

	const addStorage = () => {
		let storedData = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
		console.log(movie.id);
		if (!storedData.includes(movie.id.toString())) {
			storedData.push(movie.id);
			window.localStorage.movies = storedData;
		}
	};

	const removeStorage = () => {
		let storeData = window.localStorage.movies.split(',');
		let newData = storeData.filter((id) => id != movie.id);
		window.localStorage.movies = newData;
	};

	return (
		<div className="card">
			<div className="container-img">
				{
					<img
						src={`${
							movie.poster_path ? 'https://image.tmdb.org/t/p/original/' + movie.poster_path : '/img/poster.jpg'
						}`}
						alt={movie.title}
					/>
				}
			</div>
			<div className="container-txt">
				<h2>{movie.title}</h2>
				{movie.release_date ? <p className="date">Sorti le : {dateFormat(movie.release_date)}</p> : null}
				<h4>
					{parseFloat(movie.vote_average).toFixed(1)}/10 <span>⭐</span>
				</h4>
				<ul className="genre">
					{movie.genre_ids ? genreId() : movie.genres.map((movie) => <li key={movie.id}>{movie.name}</li>)}
				</ul>
				{movie.overview ? <h4>Synopsis</h4> : null}
				<p className="synopsis">{movie.overview}</p>

				{movie.genre_ids ? (
					<button className="heart" onClick={() => addStorage()}>
						🤍
					</button>
				) : (
					<button
						className="heart"
						onClick={() => {
							removeStorage();
							window.location.reload();
						}}
					>
						🧡
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
