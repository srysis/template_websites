import "./style/style.scss"
import "./style/style-phone.scss"

import React from "react"

import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Switches from "./components/Switches"
import AboutGame from "./components/AboutGame"
import HowToPlay from "./components/HowToPlay"
import EarnMoney from "./components/EarnMoney"
import Footer from "./components/Footer"

import cross_icon from "./files/cross.svg"

function App() {
	if (window.innerWidth > 450) { // check if it's not a mobile device
		window.addEventListener("scroll", function() {
			if (isVisibleInViewport(document.querySelector("#about_game"), 5)) {
				document.querySelector(".container > .image_container > img").classList.add("animate");
			} else {
				document.querySelector(".container > .image_container > img").classList.remove("animate");
			}
		})
	}

	// function that checks if given element is in the user's browser's viewport by X percent, where X is from 0 to 100
	function isVisibleInViewport(element, percentage) {
		let rect = element.getBoundingClientRect();
		let windowHeight = (window.innerHeight || document.documentElement.clientHeight);

		return !(
			Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentage ||
			Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentage
		)
	};

	const [visible, setVisibility] = React.useState(false);
	const [showInfo, setShowInfo] = React.useState(false);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowInfo(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, [])

	return (
		<>
			{ showInfo &&  
				<div id="info">
					<p>This website is created based on the template, that is available by using <a href="https://html.design/download/faraado-car-game-psd-template/" >this</a> link.</p>
					<img src={cross_icon} onClick={() => setShowInfo(false)} />
				</div>
			}
			<div className="header wrapper">
				<Header />
				<Welcome />
			</div>
			<Switches />
			<main className="main wrapper">
				<AboutGame />
				<HowToPlay />
				<EarnMoney />
				<Footer />
			</main>
		</>
	);
}

export default App;
