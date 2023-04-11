const Input = (props) =>
{
    //how to remove specfic props use {props} for regular
    const{name, ...rest} = props
    return(
        <input
            {...rest}
        />
    )
}

export default Input