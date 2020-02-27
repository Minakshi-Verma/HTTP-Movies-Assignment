import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Route } from 'react-router-dom';

function Movie(props,{ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  //handleUpdate function that updates the movie based on id
  const handleUpdate = (e) => {
  props.history.push(`/update-movie/:id`)
  }

  const handleDelete =()=>{

  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
      {/* button ro update and delete the movie */}      
      
     
      <button className='update-button'onClick= {handleUpdate}> Update</button>
      <button className='delete-button' onClick= {handleDelete}> Delete</button>
     
    </div>
  );
}

export default Movie;
