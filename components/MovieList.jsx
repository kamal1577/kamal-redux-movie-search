import React, { PropTypes, Component } from 'react'
import { loadMovies } from '../actions';
import { connect } from 'react-redux'

class MovieList extends Component {
	constructor(props) {
				super(props);
				this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {
		// ...
				//My added code
				event.preventDefault();
				this.props.dispatch(loadMovies(event.target.value));
				//end added
	}

	componentDidMount() {
		// ...
		this.props.onDidMount();
	}

	render() {
		// console.log(">>>gdhgdhtdht>",this.props)
		const movies = this.props.movies.map((movie) => {
			return (
				<li key={movie.imdbID}>{movie.Title}</li>
				);
		});
		return (
			<div>
				<input type="text" onChange={this.onSearch}/>
				<h1> Movie List </h1>
				{this.props.requestPending &&
					<h3> Request Pending </h3>
			 	}

				{!this.props.requestPending &&
					<div>
						<ul>
							{movies}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

MovieList.propTypes = {
	onSearchChange: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	onDidMount: PropTypes.func
};

export default connect()(MovieList);
