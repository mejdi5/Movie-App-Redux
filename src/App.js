import React from 'react'
import AddMovie from './Components/AddMovie'
import MovieList from './Components/MovieList'
import Filter from './Components/Filter'
import './App.css';



function App() {


  return (
    <div className="App">
      <h1>Movie App With Redux</h1>
      <Filter/>
      <MovieList />
      <AddMovie/>
    </div>
  );
}

export default App;
