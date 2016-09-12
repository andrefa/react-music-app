import React from 'react';
import { connect } from 'react-redux';
import Results from './Results'

function mapStateToProps(state) {
  return {
    data: paginate(state.artists.data, state.artists.current, state.artists.pageSize)
  };
}

function paginate(artists, page, pageSize) {
  return artists.slice(page * pageSize, (page+1) * pageSize)
}

const setArtist = (artist) => ({
  type: 'SET_ARTIST_SELECTED',
  artist
});

function mapDispatchToProps(dispatch, props) {
  return {
    onSelect: setArtist
  }
}

const ArtistResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ArtistResults;
