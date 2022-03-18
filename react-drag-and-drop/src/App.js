import Board from "./components/Board";
import Card from "./components/Card";
import './App.css';

function App() {
  return (
    <div className="flexbox">

      <Board id="boadr-1" className="board">
       
      </Board>

      <Board id="boadr-2" className="board">
        <Card id="card-1" className="card" draggable="true">
          <p>Card One</p>
        </Card>
        <Card id="card-2" className="card" draggable="true">
          <p>Card Two</p>
        </Card>
      </Board>
      
    </div>
  );
}

export default App;
