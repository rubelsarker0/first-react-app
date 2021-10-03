import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MealsDetails from './components/MealsDetails/MealsDetails';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import './App.css';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/home" exact component={Home} />
					<Route path="/home/:idMeal" exact component={MealsDetails} />
					<Route path="/categories" component={Categories} />
					<Route path="/about" component={About} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
