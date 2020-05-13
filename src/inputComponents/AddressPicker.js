import React, { useState } from 'react'
import TaiwanPostal from '../data/TaiwanPostalCode.json'

const AddressPicker = () => {
    let [value, setValue] = useState({
        city: '台北市',
        district: '中正區',
        postalCode: '100'
    })
    // 取得城市值
    const citys = Object.keys(TaiwanPostal)
    // 抓取符合選取的區域(value.city的值會符合選取的條件)
    let districts = Object.keys(TaiwanPostal[value.city])

    const changeCity = (e) => {
        setValue({
            city: e.target.value,
            district: '',
            postalCode: '',
        })
    }
    const changeDistrict = (e) => {
        let postalCodes = TaiwanPostal[value.city][e.target.value]
        setValue({
            ...value,
            district: e.target.value,
            postalCode: postalCodes
        })
    }
    // console.log(value)
    return (
        <div>
            <label>城市
                <select onChange={(e) => changeCity(e)} value={value.city}>
                    {citys.map(item => < option key={item} value={item}> {item}</option>)}
                </select>
            </label>
            <br />
            <label>市/區
                <select onChange={(e) => changeDistrict(e)} value={value.district}>
                    {districts.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </label>
            <br />
            <label>郵遞區號
            <input
                    value={value.postalCode || '請選擇市/區'}
                    disabled={true}
                />
            </label>
        </div >
    )
}

export default AddressPicker