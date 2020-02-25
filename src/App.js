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

  buttonClick = (event, id) => {

    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    const clickedPokemon = this.state.clickedPokemon;

    if (clickedPokemon.includes(id)) {
      this.setState({
        clickedPokemon: [],
        score: 0,
        navText: "You guessed Wrong"
      })
      
    }
    else if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.highScore + 1
      })
    }else {
      clickedPokemon.push(id)
      this.setState({
        clickedPokemon: clickedPokemon,
        score: this.state.score + 1,
        navText: "You guessed correct"
      })

      this.shuffle(this.state.pokemons)
    }
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          navText={this.state.navText}
          score={this.state.score}
          highScore={this.state.highScore}
        >
          Pokemon Clicky Game
          </Navbar>

        <Header
          title="Pokemon Clicky Game"
          description="Click on an image to earn points, but don't click on any more than once!"
        ></Header>
        <GridWrapper>
          {this.state.pokemons.map(pokemon => (
            <ImageButton
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              buttonClick={event => this.buttonClick(event, pokemon)}
            />
          ))}
        </GridWrapper>
      </Wrapper>
    )

  }
}

export default App;
