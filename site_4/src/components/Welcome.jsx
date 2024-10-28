import car from "../files/cars/1.png"


function Welcome() {

	return (
		<section id="welcome">
			<h1>Speed Car Game</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Suspendisse at erat mattis massa placerat sagittis. 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
			</p>
			<button>Download now</button>
			<img src={car} alt="" />
		</section>
	);
}

export default Welcome;
