const InputField = (props) => {

    return (
        <input onChange={props.onChange} {...props.input} />
    );
}

export default InputField;
