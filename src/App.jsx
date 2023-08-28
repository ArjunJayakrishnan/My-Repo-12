import Header from "./big components/Header";
import Main from "./big components/Main";
import Navbar from "./big components/Navbar";
import Features from "./big components/Features";
import Footer from "./big components/Footer";

function App() {
	return (
		<>
			<div className="intro-page">
				<Navbar />
				<Header />
			</div>
			<Main />
			<Features />
			<Footer />
		</>
	);
}

export default App;
