import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, FILTER_MOVIES_BY_TITLE,FILTER_MOVIES_BY_RATE, DISPLAY_MOVIES} from "../Actions/ActionTypes"

const initialState = {Movies : [] , FilterString:"" , Rating: 0}

export const Reducer = (state = initialState, action) => 
{

    switch (action.type) 
    {
    
        case DISPLAY_MOVIES: return {
            ...state, Movies: action.payload
        }

        case ADD_MOVIE: return {
            ...state, Movies: [...state.Movies, action.payload]
        }

        case EDIT_MOVIE: return {

            ...state, Movies: state.Movies.map(movie => movie._id === action.payload._id ? 

            {...movie, title: action.payload.title, rate: action.payload.rate, date: action.payload.date, imgUrl: action.payload.imgUrl, 
            description: action.payload.description,category: action.payload.category} 

            : movie)
            }

        case DELETE_MOVIE: return {
            ...state, Movies: state.Movies.filter(movie => movie._id !== action.payload)
        }

        case FILTER_MOVIES_BY_TITLE: return {
            ...state, FilterString: action.payload
        }

        case FILTER_MOVIES_BY_RATE: return {
            ...state, Rating: action.payload
        }
        
        default: return state
    }
}

export default Reducer