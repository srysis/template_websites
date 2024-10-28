import React from "react"

import NewsletterInputElement from "./form_components/NewsletterInputElement"

function NewsletterForm( {signUpButton, setFormStateFunction} ) {
	const [isFieldEmpty, toggleFieldEmptiness] = React.useState(false); // false is by default as it is needed for error signs to not be displayed right at the start
	const [errorMessage, setErrorMessage] = React.useState("");

	function onBlurHandler(event) {
		if (event.target.value === "") {
			toggleFieldEmptiness(true);
			setFormStateFunction(false);

			setErrorMessage("This field is empty");
		} else if (event.target.name === "email" && !event.target.value.includes('@')) {
			toggleFieldEmptiness(true);
			setFormStateFunction(false);

			setErrorMessage("Enter a valid e-mail address");
		} else {
			toggleFieldEmptiness(false);
			setFormStateFunction(true);
		}
	}

	function onClickHandler(event) {
		toggleFieldEmptiness(false);
		setFormStateFunction(true);
	}

	return (
		<form id="newsletter_form">
			<div className="input_container">
				<NewsletterInputElement 
					elementName="email" 
					elementPlaceholder="Enter your email" 
					onBlurHandler={onBlurHandler} 
					onClickHandler={onClickHandler} 
					isFieldEmpty={isFieldEmpty} 
					errorMessage={errorMessage} 
				/>
			</div>
			{signUpButton}
		</form>
	);
}

export default NewsletterForm;
