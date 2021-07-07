import './App.css';
import React from 'react';
import MovieList from './container/movieList/movieList';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
  
}

export default App;
