function Reducers(state= {tabss : [{id : '1'},{id : '2'},{id : '3'},{id : '4'}],
                       keys : 1},action) {
    switch (action.type) {
        case 'Tab_Index':
            return {
                ...state,
                keys:action.keys
            }
        default :return state
    }
}
export default Reducers