// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

import fetch from 'isomorphic-fetch';

// action creators go here

export function loadMovies(searchParam) {
	// fetch happens inside load request action creator!
		return function(dispatch){
			// console.log(searchParam);
			// http://www.omdbapi.com/?apikey=499a9c60

			fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=499a9c60&s=${searchParam}`)
  .then((response) => response.json())
  .then((responseJson) =>{

			console.log(responseJson);

		 if (responseJson.Response !== 'False') {
		       dispatch(someActionCreator(responseJson))
         }

	})

		  //return response;

//end added

		// "we successfully got back a response" scenario
    // requirement: generate a view with the movie results upon successfully getting a response
    // --> do things here that will eventually update the view

    // dispatch EMITS AN ACTION
    // (an action <--> view only)
    // --> dispatch change the view to the success view


  //...what about failure?...
	// my added code
	 .catch((err) => {
		        dispatch({type: LOAD_FAILURE})
					})

  // end added
}
};


export const requestMovies = () => {
	//
	//my added
	//return(dispatch)=>{
	   // dispatch(isLoading(true));
		 return{
			 type: LOAD_REQUEST,
		 };
 // }
  //end added
	// ...
};
export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
		//my added
		isloading : true,
		//end added

	  // anything else you want!!
    // include movies coming from the data
    movies: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};
           //remove it later return(dispatch)=>{
					 	 // dispatch(isloading(true));
