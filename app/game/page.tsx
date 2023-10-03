/** @format */
"use client";
import { use, useEffect, useState } from "react";
import Cell from "../components/cell";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "../api";
import Social from "../components/social";

function newGame() {
  location.reload();
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("Circle");
  const [winMessage, setWinMessage] = useState("");
  const [circleScore, setCircleScore] = useState("0");
  const [crossScore, setCrossScore] = useState("0");

  sessionStorage.setItem("circle-score", circleScore);
  sessionStorage.setItem("cross-score", crossScore);

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWinMessage("Circle Wins!");
        Swal.fire({
          icon: "success",
          title: winMessage,
          showConfirmButton: true,
          confirmButtonText: "New Game",
          didClose: () => {
            location.reload();
          },
          allowOutsideClick: true,
        });
      } else if (crossWins) {
        setWinMessage("Cross Wins!");
        Swal.fire({
          icon: "success",
          title: winMessage,
          showConfirmButton: true,
          confirmButtonText: "New Game",
          allowOutsideClick: true,
          didClose: () => {
            location.reload();
          },
        });
        setTimeout(() => {
          location.reload();
        }, 5000);
      }
    });
  }, [cells, winMessage]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winMessage) {
      setWinMessage("Draw!");
      Swal.fire({
        icon: "info",
        title: "Draw!",
        showConfirmButton: true,
        confirmButtonText: "New Game",
        allowOutsideClick: true,
        didClose: () => {
          location.reload();
        },
      });
    }
  }, [cells, winMessage]);

  function ScoreBoard() {}

  useEffect(() => {
    if (winMessage == "Circle Wins!") {
      let circlescore = "1";
      parseInt(circlescore);
      circlescore + 1;
      setCircleScore(String(circlescore));
    } else if (winMessage == "Cross Wins!") {
      let crossscore = "1";
      parseInt(crossscore);
      crossscore + 1;
      setCrossScore(String(crossscore));
    } else if (winMessage == "Draw!") {
      console.log(`Test 3 done`);
    }
  }, [circleScore, crossScore, winMessage]);

  return (
    <div className='container'>
      <div className='myInformation'>
        <h3>Tic-Tac-Toe</h3>
        <h3>Game Developed by YH</h3>
      </div>
      <div className='scoreboard'>
        <div className='circle-score'>
          <h4>Circle: {circleScore}</h4>
        </div>
        <div className='cross-score'>
          <h4>Cross: {crossScore}</h4>
        </div>
      </div>
      <div className='gameboard'>
        {cells.map((cell, i) => (
          <Cell
            id={i}
            key={i}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winMessage={winMessage}
          />
        ))}
      </div>
      {!winMessage && (
        <div className='player-turn'>{`It's now ${go}'s turn`}</div>
      )}
      <div className='user-buttons'>
        <button className='back-home'>
          <a href='/'>{`<`}</a>
        </button>
        <button className='new-game' onClick={newGame}>
          New Game
        </button>
      </div>
      {Social()}
    </div>
  );
}

export default Game;