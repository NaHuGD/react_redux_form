import React, { useState, useEffect } from 'react';
import './App.css';
// import {Index1, Counter} from './components/index'
// import InputText from './components/inputText'

import AddressPicker from './inputComponents/AddressPicker'
import ReceiptType from './inputComponents/ReceiptType'
// UI
import Button from '@material/react-button'
import '@material/react-button/dist/button.css'

import { Cell, Grid, Row } from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';

// react-redux
import { connect } from 'react-redux'

const App = () => {
  // 按鈕的資料值
  const [data, setData] = useState({
    receiptType: '0',
    textId: '',
    receiptOptions: ["byMail"]
  })

  // 確認傳送data
  const [check, setCheck] = useState({
    checkReceiptType: false,
    checkAddressPicker: false,
  })
  // 判斷是否能傳送(submit)
  const checkReceiptTypeFn = (value) => {
    console.log('checkReceiptTypeFn', value)
    setCheck({
      ...check,
      checkReceiptType: value
    })
  }
  const checkAddressPickerFn = (value) => {
    console.log('checkAddressPickerFn', value)
    setCheck({
      ...check,
      checkAddressPicker: value
    })
  }
  // 判斷按鈕資料 => 
  const checkIsReady = () => {
    let result = false
    if (data.receiptType === '0' && data.receiptOptions.includes('byMail')) {
      console.log('1', data.receiptOptions)
      result = true
    } else if (data.receiptType === '1' && data.textId !== '' && data.receiptOptions.includes('byMail')) {
      result = true
    }
    return checkReceiptTypeFn(result)
  }
  // 判斷公司統編是否輸入
  const handleRadio = (e) => {
    checkIsReady()
    setData({
      ...data,
      receiptType: e.target.value
    })
  }
  // 判斷宅配選項
  const handleCheckbox = (e) => {
    const materialInput = e.target.closest('.mdc-checkbox');
    const newValue = materialInput.getAttribute('value')
    const name = materialInput.getAttribute('attributeName')
    // 抓取data中receiptOptions資料
    let values = data[name]
    // console.log('values', values)
    // console.log(data.receiptOptions)
    // 判斷data.receiptOptions資料中值是否符合
    checkIsReady()
    if (values.includes(newValue)) {
      console.log('符合代表有資料 要刪除')
      values = values.filter((value) => {
        return value !== newValue
      })
      console.log(values)
      setData({
        ...data,
        receiptOptions: values
      })
    } else {
      console.log('不符合無資料 要新增')
      values.push(newValue)
      setData({
        ...data,
      })
    }
    // 判斷第一個資料有無啟動
    if (!values.includes('byMail')) {
      setData({
        ...data,
        receiptOptions: []
      })
    }
  }
  // 刪除公司統編
  const removeValue = () => {
    setData({
      ...data,
      textId: ''
    })
  }
  // 判斷是否輸入text
  const handText = (e) => {
    setData({
      ...data,
      textId: e.target.value
    })
  }
  // 判斷按鈕初始
  useEffect(() => {
    checkIsReady()
  }, [data])
  // 決定送出鍵是否顯示
  const isReady = () => {
    return check.checkReceiptType && check.checkAddressPicker
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
        <Grid>
          <Row>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>
              <ReceiptType
                updateReceiptType={checkReceiptTypeFn}
                data={data}
                setData={setData}
                handleRadio={handleRadio}
                checkIsReady={checkIsReady}
                handleCheckbox={handleCheckbox}
                handText={handText}
                removeValue={removeValue}
              />
              <br />
            </Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
          </Row>
          <Row>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}></Cell>
            <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}><AddressPicker updateAddressPicker={checkAddressPickerFn} />
              <br /></Cell>
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
  return state
}

export default connect(mapStateToProps, null)(App);