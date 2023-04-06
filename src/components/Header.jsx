import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<ul>
				<li>
					<NavLink to="/">Accueil</NavLink>
				</li>
				<li>
					<NavLink to="/favoris">Coup de coeur</NavLink>
				</li>
			</ul>{' '}
			<div className="title">
				<h1>React Movies</h1>
			</div>
		</header>
	);
};

export default Header;
