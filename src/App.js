import './App.css';
import ScreenPlayer from './components/ScreenPlayer';

function App() {
  return (
    <div className="App">
      <h2>Olá mundo</h2>
      <div className="container__screens">
        <ScreenPlayer player={1} />
        <div>DADO</div>
        <ScreenPlayer player={2} />

        <button type="button" data-testid="btn-new-game">New Game</button>
        <button type="button" data-testid="btn-roll-dice">Roll Dice</button>
        <button type="button" data-testid="btn-hold-score">Hold</button>

      </div>
    </div>
  );
}

export default App;
