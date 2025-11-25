const initialState = {
  damageDealt: 0,
  waveGoal: 0,
  caramels: 20,
  damagePerShot: 1,
  autoShotsPerSecond: 1,
  upgrades: [],
};

export default function App() {
  function contadorReducer(state, action) {
    if (action.type == 'CLICK_SHOOT'){

    }else if (action.type == 'AUTO_SHOOT'){

    }else if (action.type == 'BUY_MULTIPLIER'){
      
    }else if (action.type == 'BUY_DAMAGE_UPGRADE'){
      
    }else if (action.type == 'NEXT_WAVE'){
      
    }
  }

  return (
    <>
      
    </>
  )
}