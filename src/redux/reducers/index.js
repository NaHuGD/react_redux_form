const reducer = (state, action) => {
    console.log('reducer',state)
    switch (action.type) {
        case 'TEST': {
            return {
                ...state
            }
        }
        default:
            return state
    }
}

export default reducer