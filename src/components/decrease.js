import React from 'react'


const Dec = (props) => {


    return (
        <div>
            <button onClick={() => {
                props.val(props.value - 1)
            }}>-
            </button>
        </div>
    )

}

export default Dec;