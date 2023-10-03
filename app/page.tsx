/** @format */

import Game from "./game/page";
import Social from "./components/social";

export default function Home() {
  return (
    <div className='homepage'>
      <div className='header'></div>
      <h2>Welcome to Tic-Tac-Toe Game</h2>
      <h3>Developed by YH</h3>
      <button className='start-play'>
        <a href='/game' className='button-a'>
          Start Game
        </a>
      </button>
      {Social()}
    </div>
  );
}
