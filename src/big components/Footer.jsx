import stylesFooter from "../../src/big components/Footer.module.css";
import FooterLinks from "../reusable components/FooterLinks";

function Footer() {
	return (
		<footer className={stylesFooter.footer}>
			<div className={stylesFooter.footerDiv}>
				<img
					src="../../images/logo-footer.png"
					alt="logo"
					className={stylesFooter.imageLogo}
				/>
				<div className={stylesFooter.footerLinksDiv}>
					<FooterLinks heading="Features">
						{["Link shortening", "Branding links", "Analytics"]}
					</FooterLinks>
					<FooterLinks heading="Resources">
						{["Blog", "Developers", "Support"]}
					</FooterLinks>
					<FooterLinks heading="Company">
						{["About", "Our team", "Careers"]}
					</FooterLinks>
				</div>
				<div className={stylesFooter.socialMediaLinks}>
					<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
						<ion-icon name="logo-facebook"></ion-icon>
					</a>
					<a href="https://www.x.com" target="_blank" rel="noreferrer">
						<ion-icon name="logo-twitter"></ion-icon>
					</a>
					<a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
						<ion-icon name="logo-pinterest"></ion-icon>
					</a>
					<a href="https://www.instagram.com" target="_blank" rel="noreferrer">
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
