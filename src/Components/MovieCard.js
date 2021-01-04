import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { deleteMovie } from '../Actions/Actions';
import Edit from './Edit'


const MovieCard = ({movie}) => {
const [rating, setRating] = useState(0)

const dispatch = useDispatch()

const stars = x => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= x) {
        starsArray.push(<span key={i} onClick={() => setRating(i)}>★</span>); 
        } else {
        starsArray.push(<span key={i} onClick={() => setRating(i)}>☆</span>); 
        }
    }
    return starsArray;
}

return (
    <div className="movieCard">
        <button className="delete" onClick={() => dispatch(deleteMovie(movie._id))}>X</button>
        <h2> <span className="text">Movie Title:</span> {movie.title}</h2>
        <h5><span className="text">Date:</span> {movie.date}</h5>
        <img src={movie.imgUrl} alt={movie.title}/>
        <p><span className="text">Rate:</span> {stars(movie.rate)}</p>
        <p><span className="text">Description:</span> {movie.description}</p>
        <h4><span className="text">Category:</span> {movie.category}</h4>
        <Edit movie={movie} />
    </div>
)}

export default MovieCard
