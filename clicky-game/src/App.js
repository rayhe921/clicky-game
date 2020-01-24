import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import pokemons from './pokemon.json';
import ImageButton from './components/ImageButtton';
import GridWrapper from './components/GridWrapper'

class App extends Component {

  state = {
    pokemons,
    clickedPokemon: [],
    score: 0,
    highScore: 0,
    navText: "Click an image to begin!"
  };
 
  buttonClick = (id) => {
    
    let clickedPokemon = this.state.clickedPokemon;

    if(clickedPokemon.includes(id)){
      this.setState({
        clickedPokemon: [],
        score: 0,
        navText: "You guessed Wrong"
      })
    }else{
      this.setState({
        clickedPokemon: clickedPokemon.push(id),
        score: this.state.score + 1,
        navText: "You guessed correct"
      })

      console.log(clickedPokemon)

      if(this.state.highScore < this.state.score){
          this.setState({
            highScore: this.state.highScore + 1
          })
      }
    }

  }

  render(){
    return(
      <Wrapper>
        <Navbar 
          navText={this.state.navText}
          score={this.state.score}
          highScore={this.state.highScore}
        >
          Pokemon Clicky Game
          </Navbar>
      
      <Header ></Header>
      <GridWrapper>
      {this.state.pokemons.map(pokemon => (
        <ImageButton 
          id={pokemon.id}
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          buttonClick={this.buttonClick}
          />
      ))}
      </GridWrapper>
      </Wrapper>
    )

  }
}

export default App;
