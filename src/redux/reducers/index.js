import { combineReducers } from 'redux'
import receipt from './receiptType.js'
import fullAddress from './addressPicker.js'

export default combineReducers({ receipt, fullAddress })