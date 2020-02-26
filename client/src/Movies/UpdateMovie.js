import React, {useState} from 'react';

const UpdateMovie = () => {
 const [updateMovie, setUpdateMovie] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars:  [] 
 }) 

 const handleChanges=(e)=>{
 setUpdateMovie({...updateMovie,[e.target.name]:e.target.value})
 }

 const handleSubmit = (e) => {
     e.preventDefault()
     //update the chosern movie based on id
 }

    return(
        <div>
            <h2>updated movieList</h2>
            <form onSubmit ={handleSubmit}>
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
            <button>update movie</button>
            </form>
        </div>
    )
}

export default UpdateMovie

