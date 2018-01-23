// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies, requestMovies } from '../actions';
import MovieList from './MovieList';

const mapStateToProps = (state, ownProps) => {
  // ...
//my added code
        return{
            requestPending: state.isLoading,
            movies: state.movies
            }
  //end added
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // ...
  //my added code
  return{
          onSearchChange: (searchParam)=> {
                 requestMovies(searchParam, dispatch)
          },
          onDidMount: () => {
            loadMovies
          }
       }
  // end added
};


const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;
