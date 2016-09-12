import React from 'react';
import { connect } from 'react-redux';
import Results from './Results'

function mapStateToProps(state) {
  return {
    data: state.albums.data
  };
}

const AlbumResults = connect(mapStateToProps)(Results);

export default AlbumResults;
