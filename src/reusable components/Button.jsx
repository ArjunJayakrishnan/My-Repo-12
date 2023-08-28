import PropTypes from "prop-types";
import stylesButton from "../../src/reusable components/Button.module.css";

Button.propTypes = {
	children: PropTypes.string,
	styleButton: PropTypes.object,
	onClick: PropTypes.func,
};

function Button({ children, styleButton, onClick }) {
	return (
		<button
			className={stylesButton.button}
			onClick={onClick}
			style={styleButton}
		>
			{children}
		</button>
	);
}

export default Button;
