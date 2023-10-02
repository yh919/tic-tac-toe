/** @format */

import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winMessage: string;
};

const Cell = ({
  go,
  setGo,
  id,
  cells,
  setCells,
  cell,
  winMessage,
}: CellProps) => {
  const handleClick = (e: any) => {
    const notTaken = !cells[id];
    if (winMessage) {
      return;
    }
    if (notTaken) {
      if (go === "Circle") {
        handleCellChange("circle");
        setGo("Cross");
      } else if (go === "Cross") {
        handleCellChange("cross");
        setGo("Circle");
      }
    }
  };

  const handleCellChange = (cellToChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  return (
    <div className='square' onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
  );
};

export default Cell;
