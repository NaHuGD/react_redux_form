let reducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_RECEIPT_TYPE": {
            return {
                ...state,
                receiptType: action.receiptType
            }
        }
        case "ADD_TAX_ID": {
            return {
                ...state,
                textId: action.textId

            }
        }
        case "REMOVE_VALUE": {
            return {
                ...state,
                textId: action.textId
            }
        }
        case "CHANGE_RECEIPT_OPTIONS": {
            console.log(action)
            return {
                ...state,
                receiptOptions: action.receiptOptions
            }
        }
        default:
            return state
    }
}

export default reducer