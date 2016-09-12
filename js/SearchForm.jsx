import React from 'react';
import { connect } from 'react-redux';
import { searchArtists } from './actions'

const Search = ({searchArtists}) => {
  let input;
  return (
  	<div className="jumbotron">
  		<h1>Artist Search</h1>
  		<form className="input-group" onSubmit={(e) => {
          e.preventDefault();
          searchArtists(input.value.trim())
      }}>
  			<input type="text" className="form-control" placeholder="Search artists..." ref={node => input = node}/>
  			<div className="input-group-btn">
  				<input type="submit" value="Search" className="btn btn-default"/>
  			</div>
  		</form>
  	</div>
  );
};

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

const actions = {
  searchArtists
}

const SearchForm = connect(
  mapStateToProps,
  actions
)(Search);

export default SearchForm;
