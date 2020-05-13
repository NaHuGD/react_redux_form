import React, { useState } from 'react';
import './App.css';
// import {Index1, Counter} from './components/index'
// import InputText from './components/inputText'

import AddressPicker from './inputComponents/AddressPicker'
import ReceiptType from './inputComponents/ReceiptType'

const App = () => {
  const [check, setCheck] = useState({
    checkReceiptType: false,
    checkAddressPicker: false,
  })

  const checkReceiptTypeFn = (value) => {
    console.log('checkReceiptTypeFn', value)
    setCheck({
      ...check,
      checkReceiptType: value
    })
  }
  const checkAddressPickerFn = (value) => {
    setCheck({
      ...check,
      checkAddressPicker: value
    })

  }

  const isReady = () => {
    // return check.checkReceiptType && check.checkAddressPicker
    return check.checkReceiptType
  }

  return (
    // <div>
    //   <Index1 name="IAN"/>
    //   <br />
    //   <Counter />
    //   <br />
    //   <InputText />
    // </div>
    <React.Fragment>
      <form>
        <ReceiptType updateReceiptType={checkReceiptTypeFn} />
        {/* <ReceiptType onChange={() => checkReceiptTypeFn(1)} /> */}
        <br />
        <AddressPicker updateAddressPicker={checkAddressPickerFn} />
        {/* <AddressPicker onChange={() => checkAddressPickerFn(1)} /> */}
        <button type="submit" disabled={!isReady()}>確認送出</button>
      </form>
    </React.Fragment>
  );
}

export default App;