import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
      this.state = {
        player: "X",
        board: ["", "", "", "", "", "", "", "", ""]
      }
      this.squareClicked = this.squareClicked.bind(this)
    }


    squareClicked(index) {
      let player = this.state.player;
      let board = this.state.board


      board[index] = player;
      let win = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
      ]

      // player = (player == "X"? "O" : "X");

      for(let i=0; i<win.length; i++){
        let win_line = win[i];
        let p1 = win_line[0];
        let p2 = win_line[1];
        let p3 = win_line[2];

        if( board[p1]!="" && board[p2]!="" && board[p3]!="" && board[p1]==board[p2] && board[p2]==board[p3] && board[p3]==board[p1]){
          alert(`Player ${player} Wins !!`);
        }
      }

      player = (player == "X"? "O" : "X");


      this.setState({
        player: player,
        board: board
      })
    }

  render(){
  return (
    <div className="App">
      <div className="board">
        {this.state.board.map((square,index)=>{
          return (<div onClick={() => this.squareClicked(index)} className='square'><h3 className='play'>{square}</h3></div>)
        })}
      </div>
    </div>
  );
}
}
export default App;
