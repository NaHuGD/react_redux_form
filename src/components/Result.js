import React from 'react'

const Result = (props) => {
    const {count , handClick} = props
    console.log(props.handClick)
    return (
        <React.Fragment>
            <h1>count:{count}</h1>
            <button onClick={handClick} style={{ color: 'red' }}>裡面</button>
        </React.Fragment>
    )
}

export default Result