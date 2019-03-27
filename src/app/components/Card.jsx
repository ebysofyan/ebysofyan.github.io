import React from 'react'

const Card = (props) => (
    <div className={"card " + props.className}>
        <p className="card-title mb-0">{props.title}</p>
        {props.line === true ? <hr /> : ""}
        {props.children}
    </div>
)

export default Card