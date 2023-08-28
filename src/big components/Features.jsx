import stylesFeatures from "../../src/big components/Features.module.css";
import Feature from "../reusable components/Feature";

function Features() {
	return (
		<section id="sectionFeatures" className={stylesFeatures.features}>
			<div className={stylesFeatures.featuresWriting}>
				<h2 className={stylesFeatures.heading}>Advanced statistics</h2>
				<p className={stylesFeatures.description}>
					Track your progress by using our advanced statistics dashboard 👇
				</p>
			</div>
			<div className={stylesFeatures.featuresDiv}>
				<Feature
					logoSrc="../../images/trending-up-outline.svg"
					title="Brand recognition"
				>
					Stylish links = Uniqueness
				</Feature>
				<Feature
					logoSrc="../../images/speedometer-outline.svg"
					title="Detailed records"
				>
					Track user clicks
				</Feature>
				<Feature
					logoSrc="../../images/color-palette-outline.svg"
					title="Customizable"
				>
					Edit your links
				</Feature>
			</div>
		</section>
	);
}

export default Features;
