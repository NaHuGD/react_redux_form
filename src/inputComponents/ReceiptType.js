import React, { useState, useEffect } from "react";

const ReceiptType = (props) => {
    const [data, setData] = useState({
        receiptType: '0',
        textId: '',
        receiptOptions: ["byMail"]
    })
    // 判斷是否傳送函式
    const checkIsReady = () => {
        let result = false
        if (data.receiptType === '0') {
            result = true
        } else if (data.receiptType === '1' && data.textId !== '') {
            result = true
        }
        return props.updateReceiptType(result)
    }

    const handleRadio = (e) => {
        checkIsReady()
        setData({
            ...data,
            receiptType: e.target.value
        })
    }

    const handText = (e) => {
        setData({
            ...data,
            textId: e.target.value
        })
    }

    const handleCheckbox = (e) => {
        const newValue = e.target.value
        const name = e.target.getAttribute('attributeName')
        // 抓取data中receiptOptions資料
        let values = data[name]
        // console.log('values', values)
        // console.log(data.receiptOptions)
        // 判斷data.receiptOptions資料中值是否符合
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

    useEffect(() => {
        checkIsReady()
    }, [data])

    return (
        <div>
            <span>發票類型</span>
            <label>
                <br />
                <input
                    type="radio"
                    value="0"
                    name="receiptType"
                    onChange={(e) => handleRadio(e)}
                    checked={data.receiptType === '0'} />
                個人
                <br />
                <input
                    type="radio"
                    value="1"
                    name="receiptType"
                    onChange={(e) => handleRadio(e)}
                    checked={data.receiptType === '1'} />
                公司, 統一編號:<input
                    onChange={handText}
                />
            </label>
            <br />
            <label>宅配選項
                <br />
                <input
                    type="checkbox"
                    value="byMail"
                    name="receiptOptions[]"
                    attributeName="receiptOptions"
                    onChange={(e) => handleCheckbox(e)}
                    checked={data.receiptOptions.includes('byMail')}
                />實體寄送
                <br />
                <input
                    type="checkbox"
                    value="finite"
                    name="receiptOptions[]"
                    attributeName="receiptOptions"
                    onChange={(e) => handleCheckbox(e)}
                    checked={data.receiptOptions.includes('finite')}
                    disabled={
                        !data.receiptOptions.includes("byMail")
                    }
                />限時掛號
            </label>
        </div>
    )
}

export default ReceiptType