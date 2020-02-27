import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios';

const UpdateMovie = ({movieList, setMovieList}) => {
 const [updateMovie, setUpdateMovie] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars:[] 
 }) 
const {id} = useParams()
const history = useHistory()


    //add useeffect hook

    useEffect(()=>{
    console.log("I am an array to find the item in but I am empty outside the useEffect hook", movieList)

    const movieToUpdate = movieList && movieList.find(
    item =>`${item.id}` === id)

    console.log(movieToUpdate)
    if(movieToUpdate){
    setUpdateMovie(movieToUpdate)
    }
    
    },[movieList, id])

 const handleChanges=(e)=>{
 setUpdateMovie({...updateMovie,[e.target.name]:e.target.value})
 }

 const handleSubmit = (e) => {
     e.preventDefault()
     //update the chosen movie based on id
     axios
     .put(`http://localhost:5000/api/movies/${id}`,updateMovie)
     
     .then(res=>{
         console.log("hey",res)
         setMovieList(res.data)
        history.push('/')})
     .catch(err=>console.log(err))
 }

    return(
        <div>
            
            <form className ="form" onSubmit ={handleSubmit}>
                
            <div>
                <input 
                type ="number"
                name = "id"
                placeholder ="id"
                value= {updateMovie.id}
                onChange = {handleChanges}                
                />
            </div>
            <div>
                <input 
                type ="text"
                name = "title"
                placeholder ="title"
                value= {updateMovie.title}
                onChange = {handleChanges}                
                />
            </div>
            <div>
                <input 
                type ="text"
                name = "director"
                placeholder ="director"
                value= {updateMovie.director}
                onChange = {handleChanges}                
                />
            </div>
            <div>
                <input 
                type ="number"
                name = "metascore"
                placeholder ="metascore"
                value= {updateMovie.metascore}
                onChange = {handleChanges}                
                />
            </div>
            <div>
                <input 
                type ="text"
                name = "stars"
                placeholder ="stars"
                value= {updateMovie.stars}
                onChange = {handleChanges}                
                />
            </div>
            <button className="button">update movie</button>
            </form>
        </div>
    )
}

export default UpdateMovie

