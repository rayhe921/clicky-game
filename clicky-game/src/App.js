import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import pokemons from './pokemon.json';
import ImageButton from './components/ImageButtton';
import GridWrapper from './components/GridWrapper'

class App extends Component {
  
  state = {pokemons};
 
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    this.setState({ array });
  }

  render(){
    return(
      <Wrapper>
        <Navbar>
          Pokemon Clicky Game
          </Navbar>
      
      <Header></Header>
      <GridWrapper>
      {this.state.pokemons.map(pokemon => (
        <ImageButton 
          id={pokemon.id}
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
      </GridWrapper>
      </Wrapper>
    )

  }
}

export default App;
