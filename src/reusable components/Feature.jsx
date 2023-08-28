import stylesFeature from "../../src/reusable components/Feature.module.css";
import PropTypes from "prop-types";

Feature.propTypes = {
	children: PropTypes.string,
	title: PropTypes.string,
	logoSrc: PropTypes.string,
};
function Feature({ logoSrc, title, children }) {
	return (
		<div className={stylesFeature.featureDiv}>
			<div className={stylesFeature.imageDiv}>
				<img src={logoSrc} alt="graph-up" width="64" height="64" />
			</div>
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	);
}

export default Feature;
