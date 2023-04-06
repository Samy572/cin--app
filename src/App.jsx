import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Coeur from './pages/Favoris';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}>
					Accueil
				</Route>
				<Route path="/favoris" element={<Coeur />}>
					Accueil
				</Route>
			</Routes>
		</div>
	);
}

export default App;
