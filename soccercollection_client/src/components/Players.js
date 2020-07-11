import React, { Component } from 'react';

class Players extends Component {
  state = {
    players: []
}

componentDidMount() {
    this.getPlayers()
}

getPlayers = () =>{
    fetch('http://localhost:3000/players')
        .then(response => response.json())
        .then(json => this.setState({
            players: json    
        }))

    .catch(error => console.log({error}))
}

render () {
    console.log(this.state.players);
    return (
        <div>
            {this.state.players.map( player => {
                return  (
                    <div key={player.id} className="player">
                        <form>
                        <h3> { player.name }</h3>
                        <p>{ player.age } </p>
                        <p>{ player.position }</p>
                
                        </form>
                    </div>
                )
            })}
        </div>
    )
  }
  }

export default Players;