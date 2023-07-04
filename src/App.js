import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';

function App()  {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/movies/new">Add Movie</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/movies" exact component={MovieList} />
                    <Route path="/movies/new" exact component={MovieForm} />
                    <Route path="/movies/:id" exact component={MovieDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App ;

