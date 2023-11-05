import { useEffect, useState } from "react";
import styles from "./App.module.css";
import BlockComponent from "./components/Blocks/BlockComponent";

function App() {
  const [gridSize, setGridSize] = useState(8);
  const [board, setBoard] = useState([]);
  useEffect(() => {
    let grid = [];
    for (let i = 1; i <= gridSize; i++) {
      let row = Array.from({ length: gridSize });
      // for (let j = 1; j <= gridSize; j++) {
      //   if (i % 2 === 0) row.push(<BlockComponent color="light" />);
      //   else row.push(<BlockComponent color="dark" />);
      // }
      grid.push(row);
    }
    setBoard(grid);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid_container}>
        {board.length > 0 &&
          board.map((row, rIndex) => {
            return (
              <div className={styles.row}>
                {row.map((col, cIndex) => {
                  if ((rIndex + cIndex) % 2 === 0)
                    return (
                      // <div key={cIndex}>
                      <BlockComponent color="dark" />
                      // </div>
                    );
                  else
                    return (
                      // <div key={cIndex}>
                      <BlockComponent color="light" />
                      // </div>
                    );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
