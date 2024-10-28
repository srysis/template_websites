import React from "react"

import ErrorTooltip from "./ErrorTooltip"

function FormElement( {elementName, elementPlaceholder } ) {
	const [isFieldEmpty, toggleFieldEmptiness] = React.useState(false); // false is by default as it is needed for error signs to not be displayed right at the start

	const [errorMessage, setErrorMessage] = React.useState("");

	function onFormElementBlurHandler(event) {
		if (event.target.value === "") {
			toggleFieldEmptiness(true);
			setErrorMessage("This field is empty");

		} else if ( (event.target.name === "username") && event.target.value.length < 3) {
			toggleFieldEmptiness(true);
			setErrorMessage("Username is too short.");

		} else if (event.target.name === "email" && !event.target.value.includes('@')) {
			toggleFieldEmptiness(true);
			setErrorMessage("Enter a valid e-mail address");

		} else {
			toggleFieldEmptiness(false);
		}
	}

	function onFormElementClickHandler(event) {
		toggleFieldEmptiness(false);
	}

	return (
		<>
			{ isFieldEmpty && <ErrorTooltip classes={"error_tooltip"} text={errorMessage} /> }
			<input 
				name={elementName}
				type={elementName === "username" ? "text" : elementName === "email" ? "email" : elementName === "password" ? "password" : "text"}
				placeholder={elementPlaceholder}
				className={isFieldEmpty ? "invalid" : "valid"} 
				onBlur={onFormElementBlurHandler} 
				onClick={onFormElementClickHandler}
			/>
		</>
	)
}

export default FormElement