import React from 'react';
import { connect } from 'react-redux';
import Paginator from './Paginator'

function mapStateToProps(state) {
  const hasPrevious = state.artists.current > 0;
  const hasNext = state.artists.data.length > ( state.artists.current * ( state.artists.pageSize+1 ) );

  return {
    hasNext,
    hasPrevious
  };
}

const onNext = () => ({type: 'SHOW_NEXT_ARTISTS'});
const onPrevious = () => ({type: 'SHOW_PREVIOUS_ARTISTS'});

const mapDispatchToProps = {
  onNext : onNext,
  onPrevious: onPrevious
};

const ArtistsPaginator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);

export default ArtistsPaginator;
