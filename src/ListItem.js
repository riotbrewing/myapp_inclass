import React from "react";
import "./ListItem.css"

const ListItem = (props) => {


    // we could also use props
    // {props.item}
    let {item, index, listItems, setListItems} = props;
    const [showDeleteButton, setShowDeleteButton] = React.useState(false)

    const deleteFunction = (index) =>
    {
        setListItems([
            ...listItems.slice(0, index),
            ...listItems.slice(index + 1)
        ])
    }

    const handleMouseEnter = () =>
    {
        console.log("Enter")
        setShowDeleteButton(true)
    }

    const handleMouseLeave = () =>
    {
        console.log("leave")
        setShowDeleteButton(false)
    }
    return(
        <li onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>{item}</div>
            {
                //use a ternary operator to either show or hide delete buttons
            }
            {showDeleteButton ? <button onClick={() => deleteFunction(index)}>Delete</button> : null}

        </li>
    )
}

export default ListItem