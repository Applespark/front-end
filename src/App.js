import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://pythonmasters.click:8080';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/all/`)
      .then(response => {
        setMovies(response.data.result);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:', error);
      });
  }, []);

  return (
    <div>
      <h1>영화 목록</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

