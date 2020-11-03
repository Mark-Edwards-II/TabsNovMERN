import React from 'react';

const TabHeader = (props) => {
    const selectedStyle = {
        backgroundColor: "chartreuse",
        width:"150px",
        display: "inline-block"
    }
    const notSelectedStyle = {
        backgroundColor: "purple",
        width:"150px",
        display: "inline-block"
    }
    return(
        <div style= {props.selected ? selectedStyle : notSelectedStyle} onClick={() => props.handleClick(props.index)}>
            Tab # {props.index}: {props.title}
        </div>
    )
}
export default TabHeader;