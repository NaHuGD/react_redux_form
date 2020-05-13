import React, { useState } from 'react'
import Result from './Result'

export const Index1 = (props) => {
    const { name } = props
    let [value, setValue] = useState(name)

    const handChange = (e) => {
        console.log(e.target.value)
        setValue(
            value = e.target.value
        )
    }

    return (
        <React.Fragment>
            <input value={value} onChange={(e) => handChange(e)} />
        </React.Fragment>
    )
}

export const Counter = () => {
    let [count, setCount] = useState(0)
    const handClick = () => {
        console.log('Click')
        setCount( count = count+1 )
    }

    return (
        <div>
            {/* 也可傳遞整個function進Result */}
            <Result count={count} handClick={handClick}/>
            <button onClick={() => handClick()}>click</button>
        </div>
    )
}