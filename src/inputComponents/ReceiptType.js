import React from "react"
// UI
// Card
import Card, { CardPrimaryContent, } from "@material/react-card"
import '@material/react-card/dist/card.css'

import { Body2, Headline6, } from '@material/react-typography'
import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import Radio, { NativeRadioControl } from '@material/react-radio';
import Checkbox from '@material/react-checkbox';

import '@material/react-typography/dist/typography.css'
import '@material/react-text-field/dist/text-field.css';
import '@material/react-radio/dist/radio.css';
import "@material/react-checkbox/dist/checkbox.css";


const ReceiptType = (props) => {
    const { data, handleRadio, handleCheckbox, handText, removeValue } = props
    return (
        <div>
            <Card>
                <CardPrimaryContent style={{ 'padding': '1rem' }}>
                    <Headline6 tag='p'>發票類型</Headline6 >
                    <Body2 tag='div'>
                        <label>
                            <br />
                            <Radio label='個人' key="personal">
                                <NativeRadioControl
                                    id="personal"
                                    type="radio"
                                    value="0"
                                    name="receiptType"
                                    onChange={(e) => handleRadio(e)}
                                    checked={data.receiptType === '0'}
                                />
                            </Radio>
                            <br />
                            <Radio label='公司' key="company">
                                <NativeRadioControl
                                    id="company"
                                    type="radio"
                                    value="1"
                                    name="receiptType"
                                    onChange={(e) => handleRadio(e)}
                                    checked={data.receiptType === '1'}
                                />
                            </Radio>
                            <TextField
                                style={{ margin: '1rem 0' }}
                                outlined
                                label='統一編號'
                                onTrailingIconSelect={() => removeValue()}
                                trailingIcon={<MaterialIcon role="button" icon="delete" />}
                            >
                                <Input
                                    disabled={data.receiptType !== '1'}
                                    value={data.textId}
                                    onChange={handText}
                                />
                            </TextField>
                        </label>
                        <br />
                        <label>宅配選項
                <br />
                            <Checkbox
                                type="checkbox"
                                value="byMail"
                                name="receiptOptions[]"
                                attributeName="receiptOptions"
                                onChange={(e) => handleCheckbox(e)}
                                checked={data.receiptOptions.includes('byMail')}
                            />實體寄送
                <br />
                            <Checkbox
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
                    </Body2>
                </CardPrimaryContent>
            </Card>
        </div >
    )
}

export default ReceiptType