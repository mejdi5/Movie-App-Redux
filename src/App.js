import React from 'react'
import AddMovie from './Components/AddMovie'
import MovieList from './Components/MovieList'
import Filter from './Components/Filter'
import './App.css';
import { Route, BrowserRouter as  Router } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Router>
      <h1>Movie App With Redux</h1>
      <Route exact path="/" render= {() => <> <Filter/> <MovieList/> <AddMovie/> </>}/>
      </Router>
    </div>
  );
}

export default App;
