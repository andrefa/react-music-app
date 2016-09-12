export const searchArtists = name => (dispatch) => {
  dispatch({ type: 'START_ARTISTS_FETCH' });

  const query = encodeURIComponent(name);

  fetch(`https://api.spotify.com/v1/search?type=artist&q=${query}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'ARTISTS_FETCHED',
        data: extractArtists(data)
      });
    }).
    catch(err => {
      dispatch({
        type: 'ARTISTS_FETCH_ERROR',
        error : err
      });
    });
};

function extractArtists(data) {
  const artists = data.artists.items;
  return artists.map(artist => {
    return {
      id : artist.id,
      caption : artist.name,
      image : artist.images.length ? artist.images[0].url : 'https://pbs.twimg.com/profile_images/425274582581264384/X3QXBN8C_400x400.jpeg'
    }
  });
}
