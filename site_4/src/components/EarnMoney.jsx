import car_1 from "../files/cars/3.png"
import car_2 from "../files/cars/4.png"
import google_play_download from "../files/google_play.png"
import app_store_download from "../files/app_store.png"

function EarnMoney() {
	return (
		<section id="earn_money">
			<h2>You Can Earn Money From Speed Game</h2>
			<hr />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Phasellus nec cursus ex. Proin ut nunc viverra, imperdiet risus sit amet, varius eros. 
			</p>
			<img src={car_1} />
			<div className="buttons_container">
				<button>Play Now</button>
				<button>Get Coins</button>
				<button>Exchange</button>
			</div>
			<div className="flex_container">
				<div className="first_flex">
					<h3>Download From</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Phasellus nec cursus ex. Proin ut nunc viverra, imperdiet risus sit amet, varius eros. 
					</p>
					<a href=""><img src={google_play_download} /></a>
					<a href="" className="add_margin"><img src={app_store_download} /></a>
				</div>
				<div className="second_flex">
					<img src={car_2} />
				</div>
			</div>
		</section>
	);
}

export default EarnMoney;
