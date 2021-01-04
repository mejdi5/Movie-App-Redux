import React,{useEffect,useState} from 'react'
import MovieCard from './MovieCard'
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import axios from 'axios';
import { DisplayMovies } from '../Actions/Actions';
import Spinner from 'react-bootstrap/Spinner'


const MovieList = () => {

const movies = useSelector(state => state.Movies); 
const FilterString = useSelector(state => state.FilterString)
const Rating = useSelector(state => state.Rating)
const [loading, setLoading] = useState(false)
const dispatch = useDispatch()

useEffect(() => {
axios.get("https://movie-app-gmc.herokuapp.com/api/movies")
.then(response =>  dispatch(DisplayMovies(response.data)), setLoading(true))
.catch(err=>console.log(err))
},[])
    return(
    <ul className="movieList">
    {!loading && (<Spinner animation="border" />) }
    
    {movies
    //.filter(movie => movie.title.toLowerCase().includes(FilterString.toLowerCase().trim()) && movie.rate >= Rating)
    .map((movie,i) => <li> <MovieCard key = {i}  movie = {movie} /> </li>)}
    </ul>
)
}

export default MovieList