import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { filterMoviesByRate} from '../Actions/Actions';

const Rate = () => {


const Rating = useSelector(state => state.Rating)
const dispatch = useDispatch()

const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= x) {
        starsArray.push(<span key={i} onClick={() => dispatch(filterMoviesByRate(i))}>★</span>);
        } else {
        starsArray.push(<span key={i} onClick={() => dispatch(filterMoviesByRate(i))}>☆</span>);
        }
    }
    return starsArray;
}

return <div className="stars">{stars(Rating)}</div>;
}

export default Rate