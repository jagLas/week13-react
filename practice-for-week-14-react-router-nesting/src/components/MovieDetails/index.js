import { useParams } from "react-router-dom";

function MovieDetails({movies}) {
  const {movieId} = useParams();
  const movieChoice = movies.find(movie => movie.id === parseInt(movieId))

  console.log(movieId)
  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;