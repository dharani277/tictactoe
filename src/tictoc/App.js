import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      gameEnded: false,
      winner: undefined,
    };
    this.gameState = {
      board: Array(9).fill(""),
      totalMoves: 0,
    };
  }
  clicked(event) {
    if (this.gameState.board[event.target.dataset.square] === "") {
      this.gameState.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === "X" ? "O" : "X",
        totalMoves: this.gameState.totalMoves++,
      });
    }
    var result = this.checkWinner();
    if (result == "X") {
      this.setState({
        gameEnded: true,
        Winner: "X",
        final: "Match Won by X",
      });
    } else if (result == "O") {
      this.setState({
        gameEnded: true,
        Winner: "O",
        final: "Match Won by O",
      });
    } else if (result == "draw") {
      this.setState({
        gameEnded: true,
        Winner: "draw",
        final: "Match is Drawn",
      });
    }
  }
  checkWinner() {
    var moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    var board = this.gameState.board;
    for (var i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] == board[moves[i][1]] &&
        board[moves[i][1]] == board[moves[i][2]]
      )
        return board[moves[i][0]];
    }
    if (this.gameState.totalMoves == 9) {
      return "draw";
    }
  }
  render() {
    return (
      <div id="game">
        <div style={{ fontSize: "20px", marginTop: "100px" }}>
          {this.state.final}
        </div>
        <div
          id="head"
          style={{
            marginLeft: "1px",
            marginTop: "80px",
            fontWeight: "bold",
            fontSize: "50px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          TIC TAC TOE
        </div>
        <center>
          <div id="board" onClick={(e) => this.clicked(e)}>
            <div className="square" data-square="0"></div>
            <div className="square" data-square="1"></div>
            <div className="square" data-square="2"></div>
            <div className="square" data-square="3"></div>
            <div className="square" data-square="4"></div>
            <div className="square" data-square="5"></div>
            <div className="square" data-square="6"></div>
            <div className="square" data-square="7"></div>
            <div className="square" data-square="8"></div>
          </div>
        </center>
      </div>
    );
  }
}
export default App;
