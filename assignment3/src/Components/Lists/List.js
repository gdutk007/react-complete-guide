import React from 'react'

import '../../css/List.css'
const List = (props) => {
    return (
        <div onClick={props.deletebox}  className="FormList">
            <p> Hello there my name is {props.name} ! </p>
            <input type="text" value={props.name} onChange={props.change}/>
            {/* {props.children} */}
        </div>
    );
}

export default List;