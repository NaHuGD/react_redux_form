import { createStore } from 'redux'
import reducers from './reducers'

export default createStore(reducers, {
    receipt: {
        receiptType: '0',
        textId: '',
        receiptOptions: ["byMail"],
    },
    fullAddress: {
        city: '台北市',
        district: '請選擇',
        postalCode: '請選擇市/區'
    }
})