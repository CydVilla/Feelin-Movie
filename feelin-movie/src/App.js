import React, { Component } from 'react'
import MovieCard from './Components/MovieCard'

const movieData = [
  {
    title: 'Avengers: Infinity War',
    year: '2018',
    description: 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
    imageURL: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    year: '2018',
    description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet.',
    imageURL: 'https://via.placeholder.com/362x200',
},
{
    title: 'The Incredibles 2',
    year: '2018',
    description: 'Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of “normal” life.',
    imageURL: 'https://via.placeholder.com/362x200',
},
];

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appUCPrruUkAWe7yO/Table%201?api_key=keyIJpj84p7L3fJJI')
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ movies: data.records });
      }).catch(err => {
        // Error :(
      });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              {/* loop through movieData array, returning MovieCard comp, pass entire movie object into MovieCard comp as prop */}
              {this.state.movies.map(movie => <MovieCard {...movie.fields} /> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
