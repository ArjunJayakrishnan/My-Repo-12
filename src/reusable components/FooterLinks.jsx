import stylesFooterLinks from "../../src/reusable components/FooterLinks.module.css";

import PropTypes from "prop-types";
import {
	FIRST_FOOTER_LINK_OF_CHILDREN,
	SECOND_FOOTER_LINK_OF_CHILDREN,
	THIRD_FOOTER_LINK_OF_CHILDREN,
} from "./Constants";

FooterLinks.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.array,
};

function FooterLinks({ heading, children }) {
	return (
		<div className={stylesFooterLinks.footerLinksContainer}>
			<h4 className={stylesFooterLinks.heading}>{heading}</h4>
			<a href="#" className={stylesFooterLinks.link}>
				{children[FIRST_FOOTER_LINK_OF_CHILDREN]}
			</a>
			<a href="#" className={stylesFooterLinks.link}>
				{children[SECOND_FOOTER_LINK_OF_CHILDREN]}
			</a>
			<a href="#" className={stylesFooterLinks.link}>
				{children[THIRD_FOOTER_LINK_OF_CHILDREN]}
			</a>
		</div>
	);
}

export default FooterLinks;
