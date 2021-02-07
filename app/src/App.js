import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import MovieCard from './components/Moviecard';

function App() {

  const [data, setData] = useState([]);



  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films')
      .then(res => {
        setData(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli Movie List</h1>
        {data.map(element => {
          <MovieCard props = {element}/>
          console.log('element', element.id)
        })}
      </header>
    </div>
  );
}

export default App;
