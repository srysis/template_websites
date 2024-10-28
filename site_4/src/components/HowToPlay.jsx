import React from "react"

import LoginForm from "./LoginForm"


function HowToPlay() {
	const [isSent, toggleSentState] = React.useState(false);

	function onClickHandler() {
		// Since all form elements are considered not empty at first, 
		// we force a second check on all items to see if there is an empty element and if there is, a message will be shown
		// and a form will not be submitted.
		// Such mechanism was implemented to prevent user from sending an empty form right at the start.

		let form_elements = document.querySelectorAll("#login_form > .input_container > input");
		for (let form_element of form_elements) {
			if (form_element.value === "") { 
				alert("Cannot login.");
				return;
			}
		}

		// If there are no empty items, form is considered to be valid for sending.
		toggleSentState(true);

		// do some code if true
		if (isSent) alert("Login successful!"); // for some reason it only acknowledges successful login attempt only on second press of a button.
												// could it be that because of how React re-renders components, it only works on second press?
	}

	return (
		<section id="how_to_play">
			<h2>How To Play This Game</h2>
			<hr />
			<div className="container">
				<p>Login Now</p>
				<div className="flex_container">
					<LoginForm />
					<div className="list_container">
						<ol>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor tellus ex, in elementum tellus interdum id.</li>
							<li>Cras condimentum efficitur tempor. Quisque vitae viverra mauris, nec vestibulum urna. Proin aliquam congue augue auctor facilisis.</li>
							<li>Aliquam a lacus hendrerit, lacinia tellus sit amet, mollis diam. Morbi ligula turpis, dapibus in vehicula eu, placerat in sapien.</li>
						</ol>
					</div>
				</div>
				<button type="button" onClick={onClickHandler} >LOGIN</button>
			</div>

		</section>
	);
}

export default HowToPlay;
