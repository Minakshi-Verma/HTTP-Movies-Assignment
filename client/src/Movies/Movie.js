import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';
// import { Route } from 'react-router-dom';
import{useHistory} from 'react-router-dom';

function Movie({ addToSavedList, setSavedList}) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();
  let history = useHistory()
   console.log(history)

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
    e.preventDefault()
    history.push(`/update-movie/${movie.id}`)
  }
//  handleDelete function to delete the movie based on id
  const handleDelete =(e)=>{
   e.preventDefault();
  axios
  .delete(`http://localhost:5000/api/movies/${movie.id}`)
  .then(res =>{
    // console.log("i am delete", res)
    setSavedList(res.data)
  // const newArray= res.data.map((item,id)=>{
  //   return item
  // })
  
    history.push("/")
  })
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>Save </div>
        
     
      {/* buttons to update and delete the movie */}      
     
      <button className='update-button' onClick = {handleUpdate}> Edit</button>
      <button className='delete-button' onClick = {handleDelete}> Delete</button>
     
    </div>
  );
}

export default Movie;
