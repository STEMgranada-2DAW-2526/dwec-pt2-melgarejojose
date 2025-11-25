import './App.css'
import Game from './Game'
import UpgradesBoard from './UpgradesBoard'

import { GameProvider } from './GameContext';

function App() {

  return (
    <>
      <GameProvider>
        <Game/>
        <UpgradesBoard/>
      </GameProvider>
    </>
  )
}