export const GameContext = createContext();
const initialState = {
    damageDealt: 0,
    waveGoal: 100,
    caramels: 20,
    damagePerShot: 1,
    autoshotPersecond: 1,
    upgrades: [],
};


export default function GameProvider({ children }) {
    function gameReducer(state, action) {

        

        return outputState;
    }

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}