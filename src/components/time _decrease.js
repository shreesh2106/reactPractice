import React from 'react'

const TimeDec = (props) => {

    return (
        <div>
            <button onClick={() => {
                props.val()
            }}>start-
            </button>
        </div>
    )
};
export default TimeDec;