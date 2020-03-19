import React from "react";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <h2 className="boardName">Backroll</h2>
          <Card id="card-3" className="card" draggable="true">
            Task-one
          </Card>
          <Card id="card-1" className="card" draggable="true">
            <p>Task-two</p>
          </Card>
          <Card id="card-2" className="card" draggable="true">
            <p>Task-three</p>
          </Card>
        </Board>
        <Board id="board-1" className="board">
          <h2 className="boardName">Tasks Completed</h2>
        </Board>

        <Board id="board-2" className="board">
          <h2 className="boardName">Tasks Remaining</h2>
        </Board>
      </main>
    </div>
  );
}

export default App;
