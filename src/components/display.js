import React from 'react'

const Dis = (props) => {
    if (props.value > 100) {
        return (

            <div>no more input possible
            </div>
        );
    }
    if (props.value < 0) {
        return (
            <div>
                no more value possible
            </div>
        );
    }
    return (
        <div>
            <h1>{props.value}</h1>
        </div>
    )
};
export default Dis;