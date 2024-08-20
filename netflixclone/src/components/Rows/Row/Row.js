import React, { useEffect, useState } from 'react';
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer'; // Ensure correct casing
import YouTube from 'react-youtube';

const Row = ({ title, fetchurl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchurl);
        const request = await axios.get(fetchurl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [fetchurl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      try {
        const url = await movieTrailer(movie?.title || movie?.name || movie?.original_name);
        console.log(url);
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get('v');
          setTrailerUrl(videoId);
        } else {
          console.log('Trailer not found');
        }
      } catch (error) {
        console.log('Error fetching trailer:', error);
      }
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
