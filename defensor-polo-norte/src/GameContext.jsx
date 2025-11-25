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

        let outputState = state;

        if (action.type == 'CLICK_SHOOT') {
            outputState = {

            }
        }
        else if (action.type == 'AUTO_SHOOT') {
            outputState =
            {

            }
        }
        else if (action.type == 'BUY_MULTIPLIER') {
            outputState =
            {

            }
        }
        else if (action.type == 'BUY_DAMAGE_UPGRADE') {
            outputState =
            {

            }
        }
        else if (action.type == 'NEXT_WAVE') {
            outputState =
            {

            }
        }

        return outputState;
    }

    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE)

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}