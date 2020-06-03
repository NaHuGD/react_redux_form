import React, { useEffect } from 'react'
import TaiwanPostal from '../data/TaiwanPostalCode.json'
// TextField
import TextField, { Input } from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
// Card
import Card, { CardPrimaryContent, } from "@material/react-card"
import '@material/react-card/dist/card.css'
// react-redux
import { connect } from 'react-redux'
import { updateFullAddress } from '../redux/actions'

const AddressPicker = (props) => {
    // let [value, setValue] = useState(props.fullAddress)
    // 判斷
    const checkIsAddress = () => {
        let result = false
        if (props.fullAddress.city !== '' && props.fullAddress.district !== '請選擇' && props.fullAddress.postalCode !== '請選擇市/區') {
            result = true
        }
        return props.updateAddressPicker(result)
    }
    // 讓checkIsAddress能同步判斷useState資料
    useEffect(() => {
        checkIsAddress()
    }, [props.fullAddress])

    // 取得城市值
    const citys = Object.keys(TaiwanPostal)
    // 抓取符合選取的區域(props.fullAddress.city的值會符合選取的條件)
    let districts = Object.keys(TaiwanPostal[props.fullAddress.city])

    const changeCity = (e) => {
        // console.log(e.target.value)
        console.log('1changeCity', { ...props.fullAddress })
        // setValue({
        //     city: e.target.value,
        //     district: '請選擇',
        //     postalCode: '請選擇市/區',
        // })
        props.updateFullAddress({
            ...props.fullAddress,
            city: e.target.value,
            district: '請選擇',
            postalCode: '請選擇市/區',
        })
    }
    const changeDistrict = (e) => {
        console.log(e.target.value)
        checkIsAddress()
        let postalCodes = TaiwanPostal[props.fullAddress.city][e.target.value]
        props.updateFullAddress({
            ...props.fullAddress,
            district: e.target.value,
            postalCode: postalCodes
        })
    }

    return (
        <Card>
            <CardPrimaryContent style={{ 'padding': '1rem' }}>
                <label>城市=>
                <select
                        onChange={(e) => changeCity(e)}
                        value={props.fullAddress.city}
                    >
                        <option disabled>請選擇</option>
                        {citys.map(item => < option key={item} value={item}> {item}</option>)}
                    </select>
                </label>
                <br />
                <br />
                <label>市/區=>
                <select
                        onChange={(e) => changeDistrict(e)}
                        value={props.fullAddress.district}
                    >
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
                            value={props.fullAddress.postalCode || '請選擇市/區'}
                            disabled={true} />
                    </TextField>
                </label>
            </CardPrimaryContent >
        </Card >
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        fullAddress: state.fullAddress,
        taiwanPostal: TaiwanPostal,
    }
}

export default connect(mapStateToProps, {
    updateFullAddress
})(AddressPicker)