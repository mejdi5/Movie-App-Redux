import React,{useState} from 'react'
import Rate from './Rate'
import {useSelector, useDispatch} from 'react-redux'
import {filterMoviesByTitle } from '../Actions/Actions'



const Filter = () => {

const FilterString = useSelector(state => state.FilterString)
const dispatch = useDispatch()

    return(
        <div>
            <input className="searchInput" type="text" placeholder="search movies" value={FilterString} onChange={e => dispatch(filterMoviesByTitle(e.target.value))}/>
            <Rate />
        </div>
    )
}

export default Filter