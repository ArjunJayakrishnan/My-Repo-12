import Button from "../reusable components/Button";
import stylesHeader from "../big components/Header.module.css";

function Header() {
	function onClick(e) {
		e.preventDefault();
	}

	return (
		<header className={stylesHeader.header}>
			<div className={stylesHeader.headerWriting}>
				<h1 className={stylesHeader.heading}>
					More than just
					<br />
					shorter links
				</h1>
				<p className={stylesHeader.p}>
					Build your brand&apos;s recognition and get detailed insights on how
					your links are performing.
				</p>
				<Button onClick={onClick} className={stylesHeader.button}>
					Get started
				</Button>
			</div>
			<img
				src="../../images/illustration-working.svg"
				alt="person typing in laptop"
				className={stylesHeader.headerImage}
			/>
		</header>
	);
}

export default Header;
