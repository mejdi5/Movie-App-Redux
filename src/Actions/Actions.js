import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, FILTER_MOVIES_BY_TITLE,FILTER_MOVIES_BY_RATE, DISPLAY_MOVIES} from "./ActionTypes"


export const DisplayMovies = payload => {
    return{
        type: DISPLAY_MOVIES,
        payload
    }
}

export const AddMovie = payload => {
    return {
    type: ADD_MOVIE,
    payload
}
}

export const deleteMovie = id => {
    return {
        type: DELETE_MOVIE,
        payload: id
    }
}

export const editMovie = (_id,title, rate, date, imgUrl, description, category) => {
    return {
        type: EDIT_MOVIE,
        payload: {_id,title, rate, date, imgUrl, description, category}
    }
}

export const filterMoviesByTitle = text => {
    return {
        type: FILTER_MOVIES_BY_TITLE,
        payload: text
    }
}

export const filterMoviesByRate = rate => {
    return {
        type: FILTER_MOVIES_BY_RATE,
        payload: rate
    }
}

