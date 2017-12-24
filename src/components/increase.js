import React from 'react'

const Inc = (props) => {

    return (
        <div>
            <button value='+' onClick={() => {
                props.val(props.value + 1)
            }}>+
            </button>
        </div>

    )
}

export default Inc;