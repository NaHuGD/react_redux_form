import React, { useState, useEffect } from 'react';
import './App.css';

import AddressPicker from './inputComponents/AddressPicker'
import ReceiptType from './inputComponents/ReceiptType'
// UI
import Button from '@material/react-button'
import '@material/react-button/dist/button.css'
import { Cell, Grid, Row } from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
// redux
import { connect } from 'react-redux'
import { changeReceiptOptions } from './redux/actions'

const App = (props) => {

  // 確認傳送data
  const [check, setCheck] = useState({
    checkReceiptType: false,
    checkAddressPicker: false,
  })
  // 判斷是否能傳送(submit)
  const checkReceiptTypeFn = (value) => {
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
  // 判斷按鈕資料 => 
  const checkIsReady = () => {
    let result = false
    if (props.state.receipt.receiptType === '0' && props.state.receipt.receiptOptions.includes('byMail')) {
      result = true
    } else if (props.state.receipt.receiptType === '1' && props.state.receipt.textId !== '' && props.state.receipt.receiptOptions.includes('byMail')) {
      result = true
    }
    return checkReceiptTypeFn(result)
  }
  // 判斷宅配選項
  const handleCheckbox = (e) => {
    const materialInput = e.target.closest('.mdc-checkbox');
    const newValue = materialInput.getAttribute('value')
    const name = materialInput.getAttribute('attributeName')
    // 抓取data中receiptOptions資料
    let values = props.state.receipt[name]
    // 判斷data.receiptOptions資料中值是否符合
    checkIsReady()
    if (values.includes(newValue)) {
      console.log('符合代表有資料 要刪除')
      values = values.filter((value) => {
        return value !== newValue
      })
    } else {
      console.log('不符合無資料 要新增')
      values.push(newValue)
    }
    console.log(values)
    props.changeReceiptOptions(values)
  }
  // 判斷按鈕初始
  useEffect(() => {
    checkIsReady()
  }, [props.state.receipt])
  // 決定送出鍵是否顯示
  const isReady = () => {
    return check.checkReceiptType && check.checkAddressPicker
  }

  return (
    <React.Fragment>
      <form>
        <Grid>
          <Row>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>
              <ReceiptType
                // updateReceiptType={checkReceiptTypeFn}
                // props.state.receipt={props.state.receipt}
                // setData={setData}
                // handleRadio={handleRadio}
                // checkIsReady={checkIsReady}
                handleCheckbox={handleCheckbox}
              // handText={handText}
              // removeValue={removeValue}
              />
              <br />
            </Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
          </Row>
          <Row>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>
              <AddressPicker updateAddressPicker={checkAddressPickerFn} />
              <br />
            </Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
          </Row>
          <Row>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>
              <Button type="submit" disabled={!isReady()} outlined>確認送出</Button>
            </Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
          </Row>
        </Grid>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {
  changeReceiptOptions
})(App);