import car from "../files/cars/2.png"


function AboutGame() {
	return (
		<section id="about_game">
			<div className="container">
				<div className="text_and_button">
					<h3>About Game</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Suspendisse at erat mattis massa placerat sagittis. 
					</p>
					<button>Read More</button>
				</div>
				<div className="image_container">
					<img src={car} alt="" />
				</div>
			</div>
		</section>
	);
}

export default AboutGame;
