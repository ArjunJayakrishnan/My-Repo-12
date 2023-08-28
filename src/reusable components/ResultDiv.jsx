import Button from "../reusable components/Button";
import stylesResultDiv from "../../src/reusable components/ResultDiv.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
	MAX_LENGTH_UNCHANGED_URL,
	MAX_LENGTH_UNCHANGED_URL_SMALL,
} from "./Constants";

ResultDiv.propTypes = {
	inputUrl: PropTypes.string,
	id: PropTypes.number,
	fullUrl: PropTypes.array,
	setInputUrl: PropTypes.func,
	onClick: PropTypes.func,
	styleButton: PropTypes.object,
};
function ResultDiv({ fullUrl, inputUrl, id, setInputUrl }) {
	const [clicked, setClicked] = useState(false);
	const [shortUrl, setShortUrl] = useState("");

	const styleButton = {};
	if (clicked) styleButton.backgroundColor = "hsl(257, 27%, 26%)";

	useEffect(() => {
		async function fetchAndSetShortUrl() {
			try {
				const newShortUrl = await fetchShorterLink(inputUrl);
				setShortUrl(newShortUrl);
			} catch (error) {
				console.log("Error:", error);
			}
		}
		fetchAndSetShortUrl();
	}, [inputUrl]);

	async function fetchShorterLink(link) {
		const URL = `https://api.shrtco.de/v2/shorten?url=${link}`;
		try {
			const res = await fetch(URL);
			if (!res.ok) {
				setInputUrl("");
				alert(
					`Request failed with status: ${res.status}. Try putting a valid url`
				);
			}
			const data = await res.json();
			return data.result.full_short_link;
		} catch (error) {
			console.log("Error:", error);
		}
	}

	const handleCopy = () => {
		navigator.clipboard
			.writeText(shortUrl)
			.then(() => {
				console.log("Link copied to clipboard");
			})
			.catch((err) => {
				console.error("Failed to copy link to clipboard:", err);
			});
	};

	function onClick(e) {
		e.preventDefault();
		setClicked(true);
		handleCopy();
	}

	return (
		<div className={stylesResultDiv.resultContainer}>
			<a href="#main" className={stylesResultDiv.inputUrl}>
				{window.innerWidth >= 400
					? fullUrl[id].substring(0, MAX_LENGTH_UNCHANGED_URL)
					: fullUrl[id].substring(0, MAX_LENGTH_UNCHANGED_URL_SMALL)}
			</a>
			<a
				href={shortUrl}
				target="_blank"
				rel="noreferrer"
				className={stylesResultDiv.resultUrl}
			>
				{shortUrl}
			</a>
			<Button onClick={onClick} styleButton={styleButton}>
				{clicked ? "Copied!" : "Copy"}
			</Button>
		</div>
	);
}

export default ResultDiv;
