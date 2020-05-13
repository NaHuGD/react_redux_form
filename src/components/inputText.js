import React, { useState } from 'react'

const InputText = () => {
    let [inputValue, setInputValue] = useState('修改input看看')

    const handChange = (e) => {
        setInputValue(
            inputValue = e.target.value
        )
        console.log(inputValue)
    }
    return (
        <React.Fragment>
            <h1>{ inputValue !== '' ? inputValue : '沒有值'}</h1>
            <input value={inputValue} onChange={(e) => handChange(e)} />
        </React.Fragment>
    )
}

export default InputText