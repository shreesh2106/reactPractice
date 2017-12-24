import React from 'react';

const TimeInc = (props) => {

    return (
        <div>
            <button
                onClick={() => {
                    props.val()
                }}>start+
            </button>
        </div>
    )
};
export default TimeInc;