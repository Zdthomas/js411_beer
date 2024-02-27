import axios from 'axios';
import './App.css';
import { Component } from 'react';

import BeerCard from './components/BeerCard';

class App extends Component {

    constructor() {

      super()

      this.state = {

        beerLikes: {},
    
        arrayOfBeer: []

      }

    }

    

    // onClickHandler = () => {

    //   this.setState({

    //     ...this.state,

    //     isClicked: !this.state.isClicked
        
    //   })

    // };

    componentDidMount () {

      axios.get('https://api.punkapi.com/v2/beers')

        .then( res => {

          const arrayOfBeer = res.data

          this.setState({ arrayOfBeer })

        })
    }


    handleLikeClick = (idx) => {

      const newBeerLikes = { ...this.state.beerLikes };

      newBeerLikes[idx] = !newBeerLikes[idx];

      this.setState({ beerLikes: newBeerLikes });

    };
    // Check Button onclick video in lesson 1.
    // This handleLikeClick was a struggle to get working. First I had every button toggling after clicking
    // one button. But I found a solution that works.

  render () {

    return (
      <div>

        <ol> {this.state.arrayOfBeer.map((beer, idx) => {

          // <BeerCard beer={beer.name} />

          return(

            <BeerCard key = {idx} name ={ beer.name }

             image_url = {beer.image_url}

             description = {beer.description}

             tagline = {beer.tagline}

             first_brewed = {beer.first_brewed}
             
            //  onClickHandler = {this.onClickHandler}

            //  isClicked = {this.state.isClicked}

            isLiked = {this.state.beerLikes[idx] || false}

            onClickHandler = {() => this.handleLikeClick(idx)}
             
             />

             
          )

          } )} 

          

          </ol>

      </div>
    )

  }

}

export default App;
