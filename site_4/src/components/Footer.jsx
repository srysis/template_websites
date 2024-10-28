import React from "react"

import NewsletterForm from "./NewsletterForm"

function Footer() {
	const [isSent, toggleSentState] = React.useState(false);
	const [canBeSent, toggleSendingOption] = React.useState(false);

	const signUpButton = <button type='button' onClick={onClickHandler} >Sign Up</button>;

	function setCurrentFormState(formState) {
		toggleSendingOption(formState);
	}

	function onClickHandler() {
		if (canBeSent) {
			toggleSentState(true);
		} else {
			alert("Cannot subscribe.")
		}
	}

	return (
		<footer>
			<h2>Contact Us</h2>
			<nav>
				<a>HOME</a>
				<a>ABOUT</a>
				<a>OUR GAMES</a>
				<a>BLOG</a>
				<a>CONTACT US</a>
			</nav>
			<p>NEWSLETTER</p>
			<hr />
			{ !isSent && <NewsletterForm signUpButton={signUpButton} setFormStateFunction={setCurrentFormState} /> }
			{ isSent && 
				<div id="subscription_success">
					<h3>YOU HAVE SUBSCRIBED TO THE NEWSLETTER</h3>
				</div>
			}
		</footer>
	);
}

export default Footer;
