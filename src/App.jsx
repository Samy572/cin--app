import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Favoris from './pages/Favoris';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}>
					Accueil
				</Route>
				<Route path="/favoris" element={<Favoris />}>
					Accueil
				</Route>
				<Route path='*' element={<Home/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
