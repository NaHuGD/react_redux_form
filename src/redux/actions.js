// 判斷公司統編是否輸入
export let changeReceiptType = (event) => {
    console.log('CHANGE_ACtion', event.target.value)
    return {
        type: "CHANGE_RECEIPT_TYPE",
        receiptType: event.target.value
    }
}
// 輸入text
export let addTaxId = (event) => {
    console.log("ADD_TAX_ID")
    return {
        type: "ADD_TAX_ID",
        textId: event.target.value
    }
}
// 刪除公司統編
export let removeValue = (event) => {
    console.log("REMOVE_VALUE")
    return {
        type: "REMOVE_VALUE",
        textId: ''
    }
}
// 判斷宅配選項
export let changeReceiptOptions = (values) => {
    console.log("CHANGE_RECEIPT_OPTIONS", values)
    return {
        type: "CHANGE_RECEIPT_OPTIONS",
        receiptOptions: values
    }
}
// 更新地址
export let updateFullAddress = (event) => {
    console.log('updateFullAddress', event)
    return {
        type: "UPDATE_FULL_ADDRESS",
        // fullAddress: event,
        fullAddress: {
            ...event
        }
    }
}