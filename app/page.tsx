/** @format */
"use client";

import Game from "./game/page";
import Social from "./components/social";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { title } from "process";

// let playerOne = "";
// let playerTwo = "";

// function selectNames() {
//   Swal.fire({
//     title: "Select Players",
//     input: "text",
//     inputLabel: "Player One",
//   });
// }

export default function Home() {
  return (
    <div className='homepage'>
      <div className='header'></div>
      <h2>Tic-Tac-Toe</h2>
      <div className='cross-circle-homepage'>
        <h3 className='cross-home'>X</h3>
        <h3 className='circle-home'>O</h3>
      </div>
      <h3>Developed by YH</h3>
      <button className='start-play'>
        <a href='/game'>Start Game</a>
      </button>
      {Social()}
    </div>
  );
}
