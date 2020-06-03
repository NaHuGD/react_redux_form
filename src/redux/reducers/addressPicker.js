let reducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_FULL_ADDRESS": {
            console.log('UPDATE_FULL_ADDRESS', action.fullAddress)
            return {
                ...action.fullAddress
            }
        }
        default:
            return state
    }
}

export default reducer