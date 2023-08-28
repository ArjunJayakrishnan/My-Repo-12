import { useState } from "react";
import Button from "../../src/reusable components/Button";
import stylesNavbar from "./Navbar.module.css";

function Navbar() {
	const [clicked, setClicked] = useState(false);
	function onClick(e) {
		e.preventDefault();
	}
	return (
		<>
			<div className={stylesNavbar.navbarDiv}>
				<div className={stylesNavbar.sectionLinksDiv}>
					<img
						src="../../images/logo.png"
						alt="logo"
						className={stylesNavbar.imageLogo}
					/>
					{window.innerWidth >= 500 && (
						<nav className={stylesNavbar.sectionLinksNav}>
							<a href="#sectionFeatures">Features</a>
							<a href="#">Pricing</a>
							<a href="#main">Resources</a>
						</nav>
					)}
				</div>
				{window.innerWidth >= 500 && (
					<nav className={stylesNavbar.accountCreationNav}>
						<p>Login</p>
						<Button onClick={onClick}>Sign up</Button>
					</nav>
				)}
				{clicked ? (
					<div
						className={stylesNavbar.ionIconCloseDiv}
						onClick={() => setClicked(false)}
					>
						<ion-icon
							name="close-outline"
							className={stylesNavbar.ionIcon}
						></ion-icon>
					</div>
				) : (
					<div
						className={stylesNavbar.ionIconMenuDiv}
						onClick={() => setClicked(true)}
					>
						<ion-icon
							name="menu-outline"
							className={stylesNavbar.ionIcon}
						></ion-icon>
					</div>
				)}
			</div>
			{window.innerWidth <= 500 && clicked && (
				<div className={stylesNavbar.clickedMenu}>
					<nav className={stylesNavbar.navBarLinks}>
						<a href="#sectionFeatures">Features</a>
						<a href="#">Pricing</a>
						<a href="#main">Resources</a>
					</nav>
					<p>Login</p>
					<Button onClick={onClick}>Sign up</Button>
				</div>
			)}
		</>
	);
}

export default Navbar;
