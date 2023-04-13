import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<ul>
				<li>
					<NavLink to="/" className={nav => nav.isActive ? "nav-active" : '' }>Accueil</NavLink>
				</li>
				<li>
					<NavLink to="/favoris" className={nav => nav.isActive ? "nav-active" : '' }>Coup de coeur</NavLink>
				</li>
			</ul>
			<div className="title">
				<h1>React Movies</h1>
			</div>
		</header>
	);
};

export default Header;
