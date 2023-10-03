/** @format */
"use client";
import { use, useEffect, useState } from "react";
import Cell from "../components/cell";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "../api";
import Social from "../components/social";

// function newGame() {
//   location.reload();
// }

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
  const [player, setPlayer] = useState("");

  const [circleScore, setCircleScore] = useState("0");
  const [crossScore, setCrossScore] = useState("0");

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
          footer:
            "Click new game to start a new game Or Game will started automaticly after a few seconds",
          didClose: () => {
            newGame();
            if (winMessage == "Circle Wins!") {
              let score = Number(circleScore);
              score >= 0 && score++;
              setCircleScore(String(score));
              console.log(circleScore);
            }
            sessionStorage.setItem("circle-score", String(circleScore));
          },
          allowOutsideClick: true,
          timer: 5000,
        });
      } else if (crossWins) {
        setWinMessage("Cross Wins!");
        Swal.fire({
          icon: "success",
          title: winMessage,
          showConfirmButton: true,
          confirmButtonText: "New Game",
          allowOutsideClick: true,
          footer:
            "Click new game to start a new game Or Game will started automaticly after a few seconds",
          didClose: () => {
            newGame();
            if (winMessage == "Cross Wins!") {
              let score = Number(crossScore);
              score >= 0 && score++;
              setCrossScore(String(score));
            }
            sessionStorage.setItem("circle-score", String(crossScore));
          },
          timer: 5000,
        });
      }
    });
  }, [cells, circleScore, crossScore, winMessage]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winMessage) {
      setWinMessage("Draw!");
      Swal.fire({
        icon: "info",
        title: "Draw!",
        showConfirmButton: true,
        confirmButtonText: "New Game",
        allowOutsideClick: true,
        footer:
          "Click new game to start a new game Or Game will started automaticly after a few seconds",
        didClose: () => {
          newGame();
          if (winMessage == "Draw!") {
            console.log(`Test 3 done`);
          }
        },
        timer: 5000,
      });
    }
  }, [cells, winMessage]);

  function newGame() {
    setPlayer("");
    setWinMessage("");
    setCells(["", "", "", "", "", "", "", "", ""]);
  }
  function restart() {
    location.reload();
  }

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
            player={player}
            setPlayer={setPlayer}
          />
        ))}
      </div>
      {!player ? (
        <div className='player-turn'> Select Cell to Identify Players </div>
      ) : (
        !winMessage && (
          <div className='player-turn'>{`${player}'s (${go}) turn`}</div>
        )
      )}
      <div className='user-buttons'>
        <button className='back-home'>
          <a href='/'>{`<`}</a>
        </button>
        <button className='new-game' onClick={newGame}>
          New Game
        </button>
        <button className='restart-game' onClick={restart}>
          Restart Score
        </button>
      </div>
      {/* <h4>{`Note: Score don\'t Work Well (Stuck at 1)`}</h4> Solved !  */}
    </div>
  );
}

export default Game;
