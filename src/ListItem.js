import React from "react";
import "./ListItem.css"

const ListItem = (props) => {


    // we could also use props
    // {props.item}
    let {item, index, listItems, setListItems} = props;

    const deleteFunction = (index) =>
    {
        setListItems([
            ...listItems.slice(0, index),
            ...listItems.slice(index + 1)
        ])
    }

    return(
        <li>
            <div>{item}</div>
            <button onClick={() => deleteFunction(index)}>Delete</button>
        </li>
    )
}

export default ListItem