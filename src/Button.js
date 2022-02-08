import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Add chat</button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button