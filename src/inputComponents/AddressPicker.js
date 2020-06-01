import React, { useState, useEffect } from 'react'
import TaiwanPostal from '../data/TaiwanPostalCode.json'
// TextField
import TextField, { HelperText, Input } from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
// Card
import Card, { CardPrimaryContent, } from "@material/react-card"
import '@material/react-card/dist/card.css'
// Select
// import Select from '@material/react-Select'; 
// import '@material/react-list/dist/menu.css';
// import '@material/react-menu-surface/dist/menu.css';
// import '@material/react-menu/dist/menu.css';
// import '@material/react-select/dist/select.css';

const AddressPicker = (props) => {
    let [value, setValue] = useState({
        city: '台北市',
        district: '請選擇',
        postalCode: '請選擇市/區'
    })
    // 判斷
    const checkIsAddress = () => {
        let result = false
        if (value.city !== '' && value.district !== '請選擇' && value.postalCode !== '請選擇市/區') {
            result = true
        }
        return props.updateAddressPicker(result)
    }
    // 讓checkIsAddress能同步判斷useState資料
    useEffect(() => {
        checkIsAddress()
    }, [value])

    // 取得城市值
    const citys = Object.keys(TaiwanPostal)
    // 抓取符合選取的區域(value.city的值會符合選取的條件)
    let districts = Object.keys(TaiwanPostal[value.city])

    const changeCity = (e) => {
        setValue({
            city: e.target.value,
            district: '請選擇',
            postalCode: '請選擇市/區',
        })
    }
    const changeDistrict = (e) => {
        checkIsAddress()
        let postalCodes = TaiwanPostal[value.city][e.target.value]
        setValue({
            ...value,
            district: e.target.value,
            postalCode: postalCodes
        })
    }

    return (
        <Card>
            <CardPrimaryContent style={{ 'padding': '1rem' }}>
                <label>城市=>
                <select
                        onChange={(e) => changeCity(e)} value={value.city}
                    >
                        <option disabled>請選擇</option>
                        {citys.map(item => < option key={item} value={item}> {item}</option>)}
                    </select>
                </label>
                <br />
                <br />
                <label>市/區=>
                <select onChange={(e) => changeDistrict(e)} value={value.district}>
                        <option disabled>請選擇</option>
                        {districts.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>
                <br />
                <br />
                <label>
                    <TextField
                        outlined
                        label='郵遞區號'
                    >
                        <Input
                            value={value.postalCode || '請選擇市/區'}
                            disabled={true} />
                    </TextField>
                </label>
            </CardPrimaryContent >
        </Card >
    )
}

export default AddressPicker