import Button from "../reusable components/Button";
import stylesMain from "./Main.module.css";
import PropTypes from "prop-types";
import ResultDiv from "../../src/reusable components/ResultDiv";
import { useEffect, useState } from "react";

Main.propTypes = {
	inputUrl: PropTypes.string,
	setInputUrl: PropTypes.func,
	handleUrl: PropTypes.func,
};

function Main() {
	const [inputUrl, setInputUrl] = useState("");
	const [fullUrl, setFullUrl] = useState(function () {
		const storedFullUrl = localStorage.getItem("fullUrl");
		return JSON.parse(storedFullUrl) || [];
	});
	const [error, setError] = useState(false);

	const styleButton = {
		borderRadius: "0.8rem",
	};

	useEffect(() => {
		localStorage.setItem("fullUrl", JSON.stringify(fullUrl));
	}, [fullUrl]);

	function onClick(e) {
		e.preventDefault();
		inputUrl === "" ? setError(true) : setError(false);
		if (inputUrl !== "") {
			setFullUrl([...fullUrl, inputUrl]);
		}
		setInputUrl("");
	}

	return (
		<main id="main" className={stylesMain.main}>
			<div className={stylesMain.inputDiv}>
				<form className={stylesMain.form}>
					<div className={stylesMain.formPlusError}>
						<input
							type="text"
							name="url"
							placeholder="Shorten a link here..."
							value={inputUrl}
							onChange={(e) => setInputUrl(e.target.value)}
						/>
						{error && (
							<p className={stylesMain.errorMessage}>Please enter a link!!</p>
						)}
					</div>
					<Button styleButton={styleButton} onClick={onClick}>
						Shorten it
					</Button>
				</form>
			</div>
			<div className={stylesMain.resultDiv}>
				{fullUrl.length > 0 ? (
					fullUrl.map((el, i) => (
						<ResultDiv
							inputUrl={el}
							id={i}
							key={i}
							fullUrl={fullUrl}
							setInputUrl={setInputUrl}
						/>
					))
				) : (
					<></>
				)}
			</div>
		</main>
	);
}

export default Main;
