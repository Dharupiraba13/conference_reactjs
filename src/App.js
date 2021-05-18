import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Header, Home, Papers, Registration, Contact, Footer } from './components';

function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Switch>
					<Route path='/Papers'>
						<Papers />
					</Route>
					<Route path='/Registration'>
						<Registration />
					</Route>
					<Route path='/Contact'>
						<Contact />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
